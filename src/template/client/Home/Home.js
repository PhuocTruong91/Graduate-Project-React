import React from 'react';
import Side from './components/Side'
import Main from './components/Main'
import '../../../css/home.scss'

function Home() {
    return ( 
        <div class="homepage">
            <Side></Side>
            <Main></Main>
        </div>
    );
}

export default Home;    