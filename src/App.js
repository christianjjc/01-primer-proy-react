import './App.css';
import NavBar from './components/NavBar/NavBar';
import Input from './components/Input/Input';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const App = () => {
    const extraerValor = (valorDelInput) => {
        return console.log(valorDelInput);
    }
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <section>
                    <Input handleExtraer={extraerValor} />
                </section>
            </main>
            <footer>
            </footer>
        </div>
    )
}

export default App
