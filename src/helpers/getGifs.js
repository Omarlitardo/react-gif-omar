export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=DPtpuZahiQt1AkcC1zyMh93iWlVfQXcL&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  // console.log( data);



  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
    
  // console.log(gifs);
  return gifs;
};


//  getGifs();


// "https://media0.giphy.com/media/l41lN7qEgGhjF9muY/giphy.gif?cid=3659fb3b1douxroir4eyufe956yqrsbqvfupye45cegznts2&ep=v1_gifs_search&rid=giphy.gif&ct=g"