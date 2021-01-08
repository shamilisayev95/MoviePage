import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function Home() {
    return (
        <div className='root__main-container'>
          <header className='main-container__header'>
            WELCOME TO Homepage
          </header>
          <main className='main__container'>
            <div>
            <Carousel>
                <div>
                    <img src="" />
                    <p className="legend">Movie 1</p>
                </div>
                <div>
                    <img src="https://news.artnet.com/app/news-upload/2016/03/6358055488201275001050560_42_DGA_20151015_PB_0594.jpg" />
                    <p className="legend">Movie 2</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQT2EkKybcPBeBjxjUKKJl2s94_ZePPKRjUQ&usqp=CAU" />
                    <p className="legend">Movie 3</p>
                </div>
            </Carousel>
            </div>
          </main>
        </div>
    );
  }

export default Home;