import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Popup from './components/Popup';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';
import { commits } from './data/commits';
import { useSelector } from 'react-redux';

const links = [
  {
    id: 1,
    path: '/',
    label: 'Support'
  },
  {
    id: 2,
    path: '/',
    label: 'Learning'
  },
  {
    id: 3,
    path: '/',
    label: 'Русская версия'
  },
];
const copyright = '© 2020 Your Name';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const settings = useSelector((state) => state.settings);
  const checkSettings = (settings) => {
    const { repository, command, time } = settings;
    return !!repository && !!command && !!time;
  }

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Header className="App__header" isSettings={ checkSettings(settings) } onClickBtnOpenPopup={ handleOpenPopup } />

        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              render={
                () => checkSettings(settings) ? <HistoryPage commits={ commits } /> : <HomePage />
              }
            />
            <Route
              path="/settings"
              render={ () => <SettingsPage />}
            />
            <Route
              path="/history"
              render={
                () => <HistoryPage commits={ commits } />
              }
            />
            <Route render={ () => <HomePage /> } />
          </Switch>
        </Layout>

        <Footer links={ links } copyright={ copyright } />
        <Popup isOpen={ isOpen } onCancel={ handleCancel } ></Popup>
      </div>
    </Router>
  );
}

export default App;
