fetch("https://jsonplaceholder.typicode.com/users").then((db)=>{
    return db.json();
}).then((dataSet)=>{
    console.log(dataSet[2].name);
    document.getQuerySelector('#name').innerHTML = dataSet[2].name;
    // document.getElementById('secondtwittername').innerHTML = dataSet[0].name;
    document.getElementById('username').innerHTML = dataSet[2].username;
});

fetch('https://jsonplaceholder.typicode.com/posts').then((db)=>{
    // console.log(data);
    return db.json();
}).then((dataSet)=>{
    // console.log(completedata[0].userId);

    let finalData = "";

    dataSet.map((values)=>{
        finalData += `
        <div id="tweet">
                
                    <h1 id="tweet-user">${values.userId}</h1>
                    <p id="title">${values.title}</p>
                    <p id="tweet-content">${values.body}</p>
                </div>
        `
    });

    document.getElementById("tweets").innerHTML = finalData;

});
