fetch("https://jsonplaceholder.typicode.com/users").then((db)=>{
    return db.json();
}).then((dataSet)=>{
    console.log(dataSet[2].name);
    document.getQuerySelector('#name').innerHTML = dataSet[2].name;
    document.getElementById('username').innerHTML = dataSet[2].username;
});

fetch('https://jsonplaceholder.typicode.com/posts').then((db)=>{
    return db.json();
}).then((dataSet)=>{

    let finalData = "";

    dataSet.map((values)=>{
        finalData += `
        <div class="tweet">
                        <img src="./images/WhatsApp Image 2023-04-07 at 16.35.44.jpg" alt="" class="tweet-pfp" id="tpfp">
                        <div id="tweet">
                        <div id="tweet-user">
                            <h3>Lauretta James</h3>
                            <img src="images/icons8-verified-badge-48.png" alt="" id="verified" class="icon">
                            <a id="username">@LJamestweets</a>
                        </div>
                        <p id="tweet-content">${values.body}</p>
                        <div class="tweet-icons">
                            <img src="./images/icons8-speech-48.png" alt="" id="comment" class="icon">
                            <img src="./images/repeat-outline.svg" alt="" id="retweet" class="icon">
                            <img src="./images/heart-outline.svg" alt="" id="like" class="icon">
                            <img src="./images/icons8-combo-chart-32.png" alt="" id="analytics" class="icon"><p>20k</p>
                            <img src="./images/icons8-share-48.png" alt="" id="share" class="icon">
                        </div>
                    </div>
                    </div>
        `
    });

    document.querySelector(".tweets-container").innerHTML = finalData;

});
