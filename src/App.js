import React from 'react';
import './App.css';
import Product from "./Product";
import Button from "./Button";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import Tiles from "./Tiles";
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
          <nav>
            <Button text={"to the collection"}/>
            <Button text={"shop all bags"}/>
            <Button text={"pre-orders"}
                    disabled={true}/>
          </nav>
          <main>
              <Product
                  image={bag1}
                  span={"Best seller"}
                  title={"The handy bag"}
                  price={"€400,-"}
              />
              <Product
                  image={bag2}
                  span={"Best seller"}
                  title={"The stylish bag"}
                  price={"€250,-"}
              />
              <Product
                  image={bag3}
                  span={"Best seller"}
                  title={"The simple bag"}
                  price={"€300,-"}
              />
              <Product
                  image={bag4}
                  span={"Best seller"}
                  title={"The trendy bag"}
                  price={"€150,-"}
              />
          </main>
          <footer>
              <Tiles
              title={"THE BRAND"}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aspernatur atque beatae consequuntur corporis cumque delectus dicta distinctio ea eius eligendi exercitationem expedita facere fuga fugiat fugit hic, ipsam iste molestiae nesciunt nostrum nulla optio porro quas quasi recusandae repellat repudiandae rerum sapiente soluta temporibus voluptate voluptatem voluptates voluptatibus."}
              />
              <Tiles
              image={brand}
              />
              <Tiles
              image={story}
              />
              <Tiles
              title={"OUR STORY"}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto assumenda aut consectetur culpa cum distinctio dolorem ea expedita fugit, illo itaque laboriosam magni nemo nesciunt, quas, voluptatum. Dolor doloremque eligendi in itaque similique. Consequatur deleniti ea ex, facilis fugiat id modi nihil nobis odio omnis perferendis quis rerum vitae."}
              />

          </footer>
     </>
  );
}

export default App;



