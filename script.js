//add random in timing to get a more discret bot
function getRandomDelay(baseDelay) {
    const deviation = 500; // 0.5 secondes en millisecondes
    const minDelay = baseDelay - deviation;
    const maxDelay = baseDelay + deviation;
    return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
}


function randbot(nfollwer){

    if (document.querySelectorAll('[data-testid="AppTabBar_Profile_Link"]') !== null) {

        const profile = document.querySelector('[data-testid="AppTabBar_Profile_Link"]');

        profile.click()
    
        
        setTimeout(() => {
            const follower = document.querySelector("#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div:nth-child(3) > div > div > div > div.css-175oi2r.r-ymttw5.r-ttdzmv.r-1ifxtd0 > div.css-175oi2r.r-13awgt0.r-18u37iz.r-1w6e6rj > div:nth-child(2) > a")
            follower.click()
        }, getRandomDelay(3000));
        
        setTimeout(() => {
            const following = document.querySelector("#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div.css-175oi2r.r-1e5uvyk.r-6026j > div:nth-child(2) > nav > div > div.css-175oi2r.r-1adg3ll.r-16y2uox.r-1wbh5a2.r-1pi2tsx > div > div:nth-child(3) > a")
            following.click()
        }, getRandomDelay(6000));
        
        setTimeout(() => {
            const firstFollower = document.querySelector("#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > section > div > div > div:nth-child(1) > div > div > div > div > div.css-175oi2r.r-18kxxzh.r-1kb76zh.r-onrtq4.r-1h0z5md > div > div > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > div.r-1p0dtai.r-1pi2tsx.r-u8s1d.r-1d2f490.r-ipm5af.r-13qz1uu > div > a")
            firstFollower.click()
        }, getRandomDelay(8000));
        
        setTimeout(() => {
            const follower = document.querySelector("#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div:nth-child(3) > div > div > div > div.css-175oi2r.r-ymttw5.r-ttdzmv.r-1ifxtd0 > div.css-175oi2r.r-13awgt0.r-18u37iz.r-1w6e6rj > div:nth-child(2) > a")
            follower.click()
        }, getRandomDelay(10000));
        
        setTimeout(() => {
            const following = document.querySelector("#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div.css-175oi2r.r-1e5uvyk.r-6026j > div:nth-child(2) > nav > div > div.css-175oi2r.r-1adg3ll.r-16y2uox.r-1wbh5a2.r-1pi2tsx > div > div:nth-last-child(2) > a")
            following.click()
        }, getRandomDelay(12000));

        setTimeout(() => {

            function clickEverySecond(nfollwer) {
                count=2
                const interval = setInterval(() => {
                    const selector = `#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > section > div > div > div:nth-child(${count}) > div > div > div > div > div.css-175oi2r.r-1iusvr4.r-16y2uox > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wtj0ep > div.css-175oi2r.r-19u6a5r > div`;
                    //               "#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > section > div > div > div:nth-child(1) > div > div > div > div > div.css-175oi2r.r-1iusvr4.r-16y2uox > div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wtj0ep > div.css-175oi2r.r-19u6a5r > div")
                    const element = document.querySelector(selector);
                    



                    if (window.getComputedStyle(element).getPropertyValue('background-color')==="rgb(15, 20, 25)") {
                        element.click();
                        console.log(`Clicked on element ${count}`);
                        count++;
                        console.log(count+"  "+nfollwer+"   "+ (count > nfollwer))
                        if (count > nfollwer) {
                            clearInterval(interval); // Arrête l'intervalle après 10 clics
                        }
                    } else {
                        count++
                        console.error("L'élément n'a pas été trouvé.");
                        
                    }
                }, 1000); // Répète toutes les secondes (1000 millisecondes)
            }

            clickEverySecond(nfollwer);

        }, getRandomDelay(15000));

        setTimeout(() => {
            window.location.reload();
        }, getRandomDelay(5450)*10);
    }


    
   


    else{
        alert("resize the window so the button profile can be clicked")
    }
    
}









chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "modActivate") {
        // Récupérer la valeur de 'n' depuis le message
        let n = message.n;
        // Utiliser la valeur de 'n' comme nécessaire
        console.log("La valeur de 'n' est :", n);
        randbot(n)
    }
    if (message.action === "modNotActivate") {
        window.location.reload();
    }
     
});
