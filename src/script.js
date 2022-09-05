


//         var obj = {a:1, b:2, c:3};

// for (var prop in obj) {
//   console.log(obj[prop]);
// }


// https://meloman.kz/stories/all

// fetch('https://run.mocky.io/v3/86cbda2c-3880-4a12-ae7e-ffe5091bc9d3')
//   .then(function (response) {
//     response.json().then(function (data) {
//       console.log('data', data)
//     })
//   })



document.addEventListener('DOMContentLoaded', () => {
  new StoriesSlider(document.getElementById("app-stories"), {

    stories: [
      {
        name: 'Акции',
        photo: 'https://goldapple.ru/media//stories/preview_path/story_cover_01.09_SALE50_1_.jpg',
        
        items: [
          {
            url: 'https://goldapple.ru/media/stories/6/c/6cb7f552607646c39dfeeb8e802d7e39.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/e/0/e043134af9224a1e93d18ab61aaee852.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/2/8/28ad971e543e4d47aa6f6cd24eaf3514.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/b/0/b0bb58ed42eb46caba02ff32c94ab56c.mp4',
            
            type: 'video'
          },
        ],
      },
      {
        name: 'Brands',
        photo: 'https://goldapple.ru/media//stories/preview_path/story_cover_24.05.22_new_1.jpg',
        
        items: [
          {
            url: 'https://goldapple.ru/media/stories/c/f/cfe8a3c8081c4473b5a1cc74a3bdaeb6.mp4',
            
            type: 'video',
            // tovary: [
            //   {
            //     name: 'asdasd',
            //     photo: 'asdasd',
            //     url: 'asdasdasd',
            //   }
            // ]
          },
          {
            url: 'https://goldapple.ru/media/stories/s/o/solgar_nabivki.mp4',
            
            type: 'video'
          },
        ],
      },
      {
        name: 'live',
        photo: 'https://goldapple.ru/media//stories/preview_path/story_cover_30.03.22_live.jpg',
        
        items: [
          {
            url: 'https://goldapple.ru/media/stories/6/2/620a80f4b053492c824fc6ee13ec5b65.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/a/d/ad1185bfd50d467ab6f003daa00a1493.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/8/8/88a9a148-bbb4-4168-9b8d-cad7127f9803.jpeg',
            
            type: 'image'
          },
          {
            url: 'https://goldapple.ru/media/stories/f/7/f78fb6a23c9e49fe8f187747a4a254b2.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/6/f/6f935e0d65f24546a0db0e1400dca766.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/7/a/7a5fe8593e184a949553f17187edc24f.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/2/c/2c5572393f3f44e498525a1f9ac86794.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/1/9/1900f4d490fd4416897680df23525125.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/5/c/5cbb3866e3fc4239bbbc1edf08e24fc2.mp4',
            
            type: 'video'
          },
        ],
      },
      {
        name: 'Новинки',
        photo: 'https://goldapple.ru/media//stories/preview_path/story_cover_13.04.22_brands.jpg',
        
        items: [
          {
            url: 'https://goldapple.ru/media/stories/e/0/e043134af9224a1e93d18ab61aaee852.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/2/8/28ad971e543e4d47aa6f6cd24eaf3514.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/b/0/b0bb58ed42eb46caba02ff32c94ab56c.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/2/7/27208b4c78494de683ba9ce364c30928.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/9/f/9f21aa7fc6584ef1b1554736e1f55965.mp4',
            
            type: 'video'
          },
        ],
      },
      {
        name: 'Okolo',
        photo: 'https://goldapple.ru/media//stories/preview_path/story_cover_21.07.22_okolo.jpg',
        
        items: [
          {
            url: 'https://goldapple.ru/media/stories/9/0/90428693eda44b9c9f192904676a1afa.mp4',
            
            type: 'video'
          },
          {
            url: 'https://goldapple.ru/media/stories/9/0/90428693eda44b9c9f192904676a1afa.mp4',
            
            type: 'video'
          },
        ],
      },
    ]
  });
});


// "stories" [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//   }
// ]
