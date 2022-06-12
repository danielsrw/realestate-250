import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Navbar, Home, Buy, Rent, About, Agents, Search, Contact, Property } from './components'

const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className='App'>
                <Routes>
                    <Route
                        path="*"
                        element={
                            <main>
                                <Navbar />
                                <h1 style={{ marginTop: "3rem", color: "rgb(26, 55, 58)" }}>
                                    404 NOT FOUND
                                </h1>
                            </main>
                        }
                    />
                    <Route path='/' element={<Home />} />
                    <Route path='/rent' element={<Rent />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/agents' element={<Agents />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/property/buy' element={<Buy />} />
                    <Route path='/property' element={<Property />} />
                </Routes>
            </div>
        </ApolloProvider>
    )
}

export default App
