/* Import Card from React-Bootstrap */
import Card from 'react-bootstrap/Card';

/*  Adding React-Bootstrap Card styling */
import './Card.css';

const Home = () => {
    return (
        <>
            <Card style={{textAlign: "center"}}>

                {/* Styling header background color */}
                <Card.Header style={{backgroundColor: "LightGray"}}>
                    Aperta Bank Landing Module
                </Card.Header>

                <Card.Body>

                    <Card.Title>
                        Welcome to Aperta Bank
                    </Card.Title>

                    <Card.Text>
                        <i>"We take banking transparency to a higher level."</i>
                    </Card.Text>

                    <Card.Img src="logo512.png" alt="Aperta Bank" />

                </Card.Body>

            </Card>
        </>
    );
};

export default Home;