console.log("test");


/* 

API 
https://picsum.photos/

https://picsum.photos/v2/list

*/



// fetch aufruf
fetch("https://picsum.photos/v2/list")
    .then(response => response.json())
    .then(data => {
        console.log(data);     // 30 Array [{}]

        data.forEach((bild_Object) => {
            /*         console.log("in forEach");
                    console.log("Bild Object: " + bild_Object)
                    console.log(bild_Object);
                    console.log("Index des Bild Objects: " + index)
        
                    console.log("Bild Object_id: " + bild_Object.id);
         */

            const id = bild_Object.id;
            const author = bild_Object.author;
            const download_url = bild_Object.download_url;
            const url = bild_Object.url;


            /* 
            so soll es im html ausssehen
            section
                article 1
                    p  id
                    h2 author
                article 2
                    img
            
                <section>
                    <article>
                        <p>id</p>
                        <h2>author</h2>
                    </article>
                    <article>
                        <img src="" alt="">
                    </article>
                </section>
            
            */

            // section erstellen 
            const contactElement_section = document.createElement("section");
            // mit inhalt füllen   bzw. innerHTML 
            // -  hat keinen inhalt, ist nur hülle für styling


            // article 1 erstellen
            const contactElement_article_1 = document.createElement("article");
            // mit inhalt füllen   bzw. innerHTML 
            // -  hat keinen inhalt, ist nur hülle für styling


            // article 2 erstellen
            const contactElement_article_2 = document.createElement("article");
            // mit inhalt füllen   bzw. innerHTML 
            // -  hat keinen inhalt, ist nur hülle für styling


            // p Tag erstellen     für die id
            const contactElementId_p = document.createElement("p");
            // mit inhalt füllen   bzw. innerHTML 
            contactElementId_p.innerHTML = `Nummer: ${id}`;


            // h2 erstellen für den author
            const contactElementAuthor_h2 = document.createElement("h2");
            // mit inhalt füllen   bzw. innerHTML 
            contactElementAuthor_h2.inertHTML = `Autor: ${author}`;



            // img erstellen      - Attribute wie scr und alt dann noch
            const contactElementUrl_img = document.createElement("img");

            // mit inhalt füllen   bzw. innerHTML 
            // img Attribute   scr ??? fetchen ???
            contactElementUrl_img.scr = `${download_url}`;
            // img Attribute alt    hinzufügen
            contactElementUrl_img.alt = `Listen Nummer ${id} vom Author ${author}`;



            // html strucktur bauen    bzw. verschachteln
            // in section       sollen rein als kinder    article 1 und article 2
            contactElement_section.appendChild(contactElement_article_1);
            contactElement_section.appendChild(contactElement_article_2);

            // in den article 1      soll  rein  als kinder    p   und   h2
            contactElement_article_1.appendChild(contactElementId_p);
            contactElement_article_1.appendChild(contactElementAuthor_h2);

            // in den article 2      soll  rein  als kinder    img
            contactElement_article_2.appendChild(contactElementUrl_img);





            //  jetzt   ausgabe und sichtbar machen im body  als Kind vom body
            document.body.appendChild(contactElement_section);



            // !!! Ende forEach
        })






        // !!! Ende fetch
    })