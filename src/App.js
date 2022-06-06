import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Home, About, Property, Agents, Contact } from './components'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/property' element={<Property />} />
                    <Route path='/agents' element={<Agents />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </ApolloProvider>
    )
}

export default App
