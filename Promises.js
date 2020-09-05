let p = new Promise((res,rej)=>{
    let n=2+1;
    if(n==2)
    {
        res('Success')
    }else{
        rej('Failed')
    }
})

p.then((message)=>{
    console.log('Promise result is '+message);
}).catch((message)=>{
    console.log('Promise result is '+message);

})

const recordVideoOne =new Promise((res,rej)=>{
  console.log('Here is Video One ')
})
const recordVideoTwo =new Promise((res,rej)=>{
    console.log('Here is Video Two ')
  })
  const recordVideoThree =new Promise((res,rej)=>{
    console.log('Here is Video Three ')
  })

  Promise.all([recordVideoOne,recordVideoTwo,recordVideoThree]).then((messages)=>{console.log(messages)})
  //For One as Early it is executed
  Promise.race([recordVideoOne,recordVideoTwo,recordVideoThree]).then((message)=>{console.log(message)})