import { createContext, useContext, useReducer, useEffect } from 'react'
import { getProjects, getProfile } from '../services/api'

const PortfolioContext = createContext(null)

const initialState = {
    projects: [],
    profile: null,
    loading: true,
    error: null,
}

function reducer(state, action) {
    if (action.type === 'SET_DATA') {
        return {
            ...state,
            projects: action.payload.projects,
            profile: action.payload.profile,
            loading: false,
            error: null,
        }
    }
    if (action.type === 'SET_ERROR') {
        return { ...state, loading: false, error: action.payload }
    }
    return state
}

export function PortfolioProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [projects, profile] = await Promise.all([
                    getProjects(),
                    getProfile(),
                ])
                dispatch({ type: 'SET_DATA', payload: { projects, profile } })
            } catch (error) {
                dispatch({ type: 'SET_ERROR', payload: 'Error al cargar los datos' })
            }
        }
        fetchData()
    }, [])

    return (
        <PortfolioContext.Provider value={state}>
            {children}
        </PortfolioContext.Provider>
    )
}

export function usePortfolio() {
    const context = useContext(PortfolioContext)
    if (!context) {
        throw new Error('usePortfolio debe usarse dentro de PortfolioProvider')
    }
    return context
}