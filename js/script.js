document.addEventListener('DOMContentLoaded', function () {
    const plakateContainer = document.getElementById('plakate-container');
    const mehrAnzeigenButton = document.getElementById('mehr-anzeigen');

    const plakateData = [
        { 
            imgSrc: 'img/poster/1_1984.jpg', 
            teaser: '1984 von George Orwell ist Kult, weil ...', 
            text: 'es auch heute noch mit Themen wie Überwachung und Machtmissbrauch voll ins Schwarze trifft. Das Buch hat die Popkultur geprägt und Begriffe wie "Big Brother" in unseren Alltag gebracht. Orwells spannende Dystopie erinnert uns daran, wie wichtig Freiheit und Wachsamkeit sind, damit wir nicht in totalitäre Abgründe stürzen.' 
        },
        { 
            imgSrc: 'img/poster/2_clockwork_orange.jpg', 
            teaser: 'Clockwork Orange von Stanley Kubrick ist Kult, weil ...', 
            text: 'es mit seiner schockierenden Gewalt und der provokanten Darstellung von Freiheit und Kontrolle die Zuschauer fesselt. Kubricks einzigartige visuelle Stil und die unvergessliche Performance von Malcolm McDowell haben das Werk zu einem Meilenstein der Filmgeschichte gemacht. Zudem regt der Film zum Nachdenken über Moral und die Natur des Bösen an, was ihn zeitlos relevant macht.' 
        },
        { 
            imgSrc: 'img/poster/3_keith_haring.jpg', 
            teaser: 'Keith Haring ist Kult, weil ...', 
            text: 'seine bunten, energiegeladenen Graffiti-Figuren einfach unverwechselbar sind und die 80er Jahre perfekt einfangen. Seine Kunst ist überall präsent, von New Yorker U-Bahn-Stationen bis zu Popkultur-Ikonen, und sie bringt eine fröhliche, rebellische Botschaft mit sich. Ausserdem hat Haring soziale Themen wie AIDS und Apartheid angesprochen, was seiner Kunst eine tiefere Bedeutung verleiht und sie zeitlos relevant macht.'
        },
        { 
            imgSrc: 'img/poster/4_south_park.jpg', 
            teaser: 'South Park ist Kult, weil ...',
            text: 'es gnadenlos jeden und alles aufs Korn nimmt und dabei kein Tabu auslässt. Die schrägen Abenteuer von Stan, Kyle, Cartman und Kenny sind nicht nur urkomisch, sondern auch ein Spiegel der Gesellschaft, der uns zum Lachen und Nachdenken bringt. Ausserdem sind die schnellen Reaktionen auf aktuelle Ereignisse und der freche, respektlose Humor einfach unvergesslich.' 
        },
        { 
            imgSrc: 'img/poster/5_bowie.jpg', 
            teaser: 'David Bowie ist Kult, weil ...',
            text: 'er mit seiner ständig wechselnden Musik und seinem extravaganten Stil immer wieder die Grenzen des Möglichen gesprengt hat. Er war ein Meister der Selbstinszenierung, von Ziggy Stardust bis zum Thin White Duke, und hat damit die Popkultur nachhaltig geprägt. Seine Musik und sein einzigartiger Charakter inspirieren noch heute Künstler und Fans weltweit.' 
        },
        { 
            imgSrc: 'img/poster/6_batman.jpg', 
            teaser: 'Batman ist Kult, weil ...',
            text: 'er als düsterer Rächer ohne Superkräfte zeigt, dass man mit Mut und Verstand Grosses erreichen kann. Seine epischen Kämpfe gegen ikonische Schurken wie den Joker und die tiefgründigen Geschichten faszinieren Fans seit Jahrzehnten. Ausserdem ist Gotham Citys Beschützer dank unzähliger Comics, Filme und Serien ein fester Bestandteil der Popkultur.' 
        },
        {
            imgSrc: 'img/poster/7_mate.jpg', 
            teaser: 'El Tony Mate ist Kult, weil ...',
            text: 'er den klassischen Mate-Tee mit einem erfrischenden Twist modernisiert hat. Mit seinem coolen Design und den vielfältigen Geschmacksrichtungen hat er den traditionellen südamerikanischen Drink weltweit populär gemacht. Ausserdem verbindet El Tony Mate natürliche Energie mit einem lässigen Lifestyle, was ihn zum Lieblingsgetränk für viele Trendsetter macht.' 
        },
        {
            imgSrc: 'img/poster/8_watermelonsugar.jpg', 
            teaser: 'Watermelon Sugar von Harry Styles ist Kult, weil ...',
            text: 'der Song mit seinen sommerlichen Vibes und dem eingängigen Beat einfach gute Laune verbreitet. Die nostalgischen Lyrics und das bunte Musikvideo haben sofort ins Herz getroffen und sind ein echter Ohrwurm. Harrys charismatische Performance und sein lässiger Stil machen den Song zu einem unvergesslichen Hit, der perfekt zu sonnigen Tagen passt.'
        },
        {
            imgSrc: 'img/poster/9_taxidriver.jpg', 
            teaser: 'Taxi Driver von Martin Scorsese ist Kult, weil ...',
            text: 'der Film mit seiner düsteren Atmosphäre und Robert De Niro als unvergesslichem Antihelden Travis Bickle tief unter die Haut geht. Die ikonischen Szenen und Zitate, wie "You talkin to me?", haben sich fest in die Filmgeschichte eingebrannt. Scorseses meisterhafte Regie und die packende Story über Einsamkeit und Wahnsinn machen den Film zu einem zeitlosen Klassiker.' 
        },
        {
            imgSrc: 'img/poster/10_samba.jpg', 
            teaser: 'Der Adidas Samba ist Kult, weil ...',
            text: 'sein klassisches Design und die Vielseitigkeit ihn seit Jahrzehnten zum Lieblingsschuh für Sportler und Fashionistas machen. Ob auf dem Fussballplatz oder auf der Strasse, der Samba bleibt durch seinen Retro-Charme und den zeitlosen Look immer angesagt. Ausserdem steht er für Qualität und Komfort, was ihn zum unverzichtbaren Sneaker für jede Garderobe macht.' 
        },
        {
            imgSrc: 'img/poster/11_freitag.jpg', 
            teaser: 'Freitag-Taschen sind Kult, weil ...',
            text: 'sie aus recycelten LKW-Planen gefertigt sind und somit jedes Stück ein echtes Unikat ist. Mit ihrem coolen, urbanen Design und der nachhaltigen Herstellung treffen sie perfekt den Nerv der Zeit. Zudem sind sie super robust und praktisch, was sie zum perfekten Begleiter für das tägliche Abenteuer macht.' 
        },
        {
            imgSrc: 'img/poster/12_werkstatt.jpg', 
            teaser: 'Die Werkstatt in Chur ist Kult, weil ...',
            text: 'sie mit ihrem einzigartigen Industrie-Charme und der entspannten Atmosphäre sofort überzeugt. Hier treffen sich kreative Köpfe und Nachtschwärmer, um bei guter Musik und leckeren Drinks abzuhängen. Ausserdem machen die regelmässigen Events und das abwechslungsreiche Programm die Bar zu einem echten Hotspot in Chur.' 
        },
        {
            imgSrc: 'img/poster/13_britschi.jpg', 
            teaser: 'Britschi ist Kult, weil ...',
            text: 'es als charmantes Obersaxer Dialektwort für Butter die regionale Identität und Tradition lebendig hält. Es bringt den besonderen, bodenständigen Flair der Region zum Ausdruck und zaubert den Einheimischen sofort ein Lächeln ins Gesicht. Mit seinem einzigartigen Klang und der tief verwurzelten Bedeutung ist "Britschi" einfach ein liebenswerter Teil der lokalen Kultur.' 
        },
        {
            imgSrc: 'img/poster/14_inception.jpg', 
            teaser: 'Inception ist Kult, weil ...',
            text: 'der Film mit seiner komplexen Story und den atemberaubenden visuellen Effekten das Publikum von der ersten Minute an fasziniert. Christopher Nolans Meisterwerk spielt gekonnt mit den Grenzen von Traum und Realität und hat unzählige Diskussionen und Theorien ausgelöst. Ausserdem ist der spektakuläre Cast, angeführt von Leonardo DiCaprio, einfach unvergesslich und trägt dazu bei, dass "Inception" ein zeitloser Klassiker bleibt.' 
        },
        {
            imgSrc: 'img/poster/15_royelotis.jpg', 
            teaser: 'Royel Otis ist Kult, weil ...',
            text: 'ihr einzigartiger Sound aus Indie-Pop und nostalgischen Vibes sofort ins Ohr geht und gute Laune verbreitet. Die Band schafft es, mit ihren eingängigen Melodien und lässigen Beats eine perfekte Mischung aus Retro und Moderne zu kreieren. Ausserdem haben ihre energetischen Live-Auftritte und charismatischen Persönlichkeiten ihnen eine treue Fangemeinde beschert, die stetig wächst.' 
        },
        {
            imgSrc: 'img/poster/16_nemo.jpg', 
            teaser: 'Findet Nemo ist Kult, weil ...',
            text: 'die herzerwärmende Geschichte von Nemo und seinem überfürsorglichen Vater Marlin einfach jeden berührt. Mit seinen farbenfrohen Unterwasserwelten, liebenswerten Charakteren wie Dory und der perfekten Mischung aus Humor und Emotionen hat der Film die Herzen der Zuschauer im Sturm erobert. Ausserdem hat Pixars meisterhafte Animation einen Standard gesetzt, der noch heute begeistert.' 
        },
        {
            imgSrc: 'img/poster/17_teigaffa.jpg', 
            teaser: 'Teigaffa sind Kult, weil ...',
            text: 'sie unglaublich vielseitig und in jeder Küche auf der ganzen Welt zuhause sind. Von Spaghetti bis Ravioli bieten sie endlose Möglichkeiten für köstliche Gerichte, die sowohl einfach als auch raffiniert sein können. Ausserdem verbinden Teigwaren durch ihren gemütlichen Wohlfühlfaktor Generationen und Kulturen – sie sind einfach immer ein Genuss!' 
        },
        {
            imgSrc: 'img/poster/18_einensitzen.jpg', 
            teaser: 'Der Spruch ist Kult, weil ...',
            text: 'es mit seinem cleveren Wortspiel und der doppeldeutigen Aussage sofort zum Schmunzeln bringt. Es verbindet Humor und Alltagsweisheit auf eine charmant-witzige Art und Weise, die einfach hängen bleibt. Ausserdem spiegelt es eine lässige, unbeschwerte Lebenseinstellung wider, die viele anspricht und gerne zitiert wird.' 
        },
        {
            imgSrc: 'img/poster/19_aromat.jpg', 
            teaser: 'Aromat ist Kult, weil ...',
            text: 'es seit Generationen als das unverzichtbare Gewürz in vielen Küchen gilt und jedem Gericht das gewisse Etwas verleiht. Der unverkennbare Geschmack und das praktische Streugefäss machen es zum Lieblingsgewürz für Jung und Alt. Ausserdem weckt Aromat bei vielen nostalgische Kindheitserinnerungen und gehört einfach zu einem perfekten Essen dazu.' 
        },
        {
            imgSrc: 'img/poster/20_lanadelrey.jpg', 
            teaser: 'Lana Del Rey ist Kult, weil ...',
            text: 'ihre melancholischen Melodien und poetischen Texte die perfekte Mischung aus Vintage-Glamour und moderner Coolness schaffen. Ihre einzigartige Stimme und der nostalgische Vibe ihrer Musik ziehen Fans sofort in ihren Bann. Zudem hat sie mit ihrem unverwechselbaren Stil und ihrer mysteriösen Aura einen ganz eigenen Platz in der Popkultur erobert.' 
        },
        {
            imgSrc: 'img/poster/21_haessig.jpg', 
            teaser: 'Hässig ist Kult, weil ...',
            text: 'sie mit ihrem frechen Namen und den coolen Designs sofort ins Auge sticht. Sie verbindet hochwertige Materialien mit einem lässigen, urbanen Stil, der bei Trendsettern super ankommt. Ausserdem steht Hässig für Originalität und Selbstbewusstsein, was sie in der Modewelt einzigartig und unverwechselbar macht.' 
        },
        {
            imgSrc: 'img/poster/22_latenightdriving.jpg', 
            teaser: 'Der Slogan Late Night Driving ist Kult',
            text: 'er sofort Bilder von endlosen Nächten, Freiheit und Abenteuern auf einsamen Strassen heraufbeschwört. Er fängt das Gefühl von Unbeschwertheit und die Magie ein, die man nur bei nächtlichen Autofahrten erlebt. Ausserdem hat er einen coolen, mysteriösen Vibe, der perfekt in Musikvideos, Filme und den Alltag passt.' 
        },
        {
            imgSrc: 'img/poster/23_starwars.jpg', 
            teaser: 'Star Wars ist Kult, weil ...',
            text: 'die epische Geschichte von Jedi, Sith und dem Kampf zwischen Gut und Böse Generationen von Fans fasziniert hat. Mit ikonischen Charakteren wie Darth Vader und Yoda sowie atemberaubenden Weltraumabenteuern hat die Saga die Popkultur nachhaltig geprägt. Ausserdem sind die unvergesslichen Zitate und der beeindruckende Soundtrack einfach nicht aus unserem Leben wegzudenken.' 
        }, 
        {
            imgSrc: 'img/poster/24_whereismymind.jpg', 
            teaser: 'Where Is My Mind? ist Kult, weil ...',
            text: 'der Song der Pixies mit seinem einzigartigen Sound und der eingängigen Melodie sofort im Ohr bleibt. Er hat dank seiner Verwendung in ikonischen Filmszenen, wie dem Finale von "Fight Club", einen festen Platz in der Popkultur gefunden. Ausserdem fängt der Song perfekt das Gefühl von Verlorenheit und Rebellion ein, was ihn für viele unvergesslich macht.' 
        }
    ];
    let plakateAnzahl = 10;

    function erstellePlakatElement(plakat) {
        const plakatWrapper = document.createElement('div');
        plakatWrapper.classList.add('plakat-wrapper');

        const plakatElement = document.createElement('div');
        plakatElement.classList.add('plakat');

        const imgElement = document.createElement('img');
        imgElement.src = plakat.imgSrc;
        imgElement.alt = 'Plakat Bild';

        const textElement = document.createElement('div');
        textElement.classList.add('plakat-text');

        const teaserElement = document.createElement('h3');
        teaserElement.innerText = plakat.teaser;

        const fullTextElement = document.createElement('p');
        fullTextElement.classList.add('plakat-text-full');
        fullTextElement.innerText = plakat.text;

        textElement.appendChild(teaserElement);
        textElement.appendChild(fullTextElement);

        teaserElement.addEventListener('click', function () {
            fullTextElement.style.display = fullTextElement.style.display === 'block' ? 'none' : 'block';
        });

        plakatElement.appendChild(imgElement);
        plakatElement.appendChild(textElement);
        plakatWrapper.appendChild(plakatElement);

        return plakatWrapper;
    }

    function ladePlakate(anzahl) {
        plakateContainer.innerHTML = '';
        for (let i = 0; i < anzahl; i++) {
            if (plakateData[i]) {
                const plakatElement = erstellePlakatElement(plakateData[i]);
                plakateContainer.appendChild(plakatElement);
            }
        }
    }

    mehrAnzeigenButton.addEventListener('click', function () {
        plakateAnzahl += 10;
        ladePlakate(plakateAnzahl);
        if (plakateAnzahl >= plakateData.length) {
            mehrAnzeigenButton.style.display = 'none';
        }
    });

    ladePlakate(plakateAnzahl);
});