import ButtonEmphasis from '../../components/UI/Buttons/ButtonEphasis';
import { BrowserRouter } from 'react-router-dom';


const Buttons: React.FC = () => {
    return (
        <BrowserRouter>
        <ButtonEmphasis disabled={false} appBarColor="primary" />
        </BrowserRouter>
    );
    };
    