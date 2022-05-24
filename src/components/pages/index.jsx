import React from 'react';
import Cards from "../cards";
import Sliders from "../sliders";
import Subs from "../subs";

const Index = () => {
    return (
        <div>

            <main style={{'minHeight':'70vh'}} className="main main-expand-lg main-light bg-success p-2 text-dark bg-opacity-10">
                <h2 className="text-center text-white bg-success m-2">Найденные животные</h2>
                <Sliders/>


                <h2 className="text-center text-white bg-success m-2">Карточки найденных животных</h2>
               <Cards/>

                <h2 className="text-center text-white bg-success m-2">Подписка на новости</h2>
                <Subs/>
            </main>

        </div>
    );
};

export default Index;