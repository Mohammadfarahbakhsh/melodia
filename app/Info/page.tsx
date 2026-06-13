
const Info = async () => {
 const data=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
    cache:"force-cache"
 })
 console.log(data);
 
const json=await data.json()
    return (
        <div>
            {json.title}
        </div>
    );
}

export default Info;
