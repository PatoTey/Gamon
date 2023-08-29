const gamedata = [
    {
        "id":1,
        "name":"Minecraft",
        "genre_id":3,
        "price":29.99,
        "rating":82,
        "sinopsis":"Explore randomly generated worlds and build amazing things, from the humblest of houses to the most majestic of castles. Play creative mode with unlimited resources or mine in the depths of the world, craft weapons and armor to defend yourself against dangerous enemies in survival mode.",
        "image":"https://http2.mlstatic.com/D_NQ_NP_618611-MLC46672842845_072021-O.webp"
    },
    {
        "id":2,
        "name":"Baldur's Gate 3",
        "genre_id":5,
        "price":42.99,
        "rating":96,
        "sinopsis":"Assemble your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the pull of absolute power.",
        "image":"https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/ba706e54d68d10a0eb6ab7c36cdad9178c58b7fb7bb03d28.png"
    },
    {
        "id":3,
        "name":"Counter Strike: Global Offensive",
        "genre_id":4,
        "price":14.99,
        "rating":83,
        "sinopsis":"Counter-Strike: Global Offensive (CS:GO) expands on the team-based action game it pioneered when it came out over 20 years ago. CS:GO includes new maps, characters, weapons, and game modes, and offers updated versions of classic Counter-Strike content (de_dust2, etc.).",
        "image":"https://myhotposters.com/cdn/shop/products/mL3927_1024x1024.jpg?v=1574110221"
    },
    {
        "id":4,
        "name":"Monster Hunter Rise Sunbreak",
        "genre_id":5,
        "price":24.99,
        "rating":86,
        "sinopsis":"¡Accept the challenge and sign up for the hunt! In Monster Hunter Rise, the latest installment in the award-winning and super-successful Monster Hunter series, you will become a hunter, explore new maps and use many different weapons to take down fearsome monsters in a whole new story. The PC version also includes tons of additional performance-enhancing and visual optimizations.",
        "image":"https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/1x1_NSwitch_MonsterHunterRiseSunbreak_image800w.jpg"
    },
    {
        "id":5,
        "name":"FINAL FANTASY XV",
        "genre_id":5,
        "price":26.99,
        "rating":81,
        "sinopsis":"Unlike other Final Fantasy games, which are aimed at a specific audience, FFXV targets not only long time fans, but also fresh faces. The redesigned combat system is testimony to this. It combines the strategy of turn-based combat with a more amusing action-based approach to create a new and unique type of gameplay. On top of the hack and slash melee combat, FFXV features parrying, dodging, spells and summons. ",
        "image":"https://m.media-amazon.com/images/I/61q6gDNsSfL._AC_UF894,1000_QL80_.jpg"
    },
    {
        "id":6,
        "name":"Battlefield 2042",
        "genre_id":4,
        "price":54.99,
        "rating":68,
        "sinopsis":"Never give up on Season 5: New Dawn. Battlefield™ 2042 is a first-person shooter that marks a return to the franchise's iconic all-out war.",
        "image":"https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Battlefield_2042_cover_art.jpg/220px-Battlefield_2042_cover_art.jpg"
    },
    {
        "id":7,
        "name":"Valheim",
        "genre_id":3,
        "price":8.99,
        "rating":90,
        "sinopsis":"A brutal multiplayer exploration and survival game, set in a procedurally generated purgatory inspired by Viking culture. Fight, build and conquer your journey in a saga worthy of Odin's blessing!",
        "image":"https://artworkstorage.s3.us-east-2.amazonaws.com/images/uploads/arts/445/1614715990445/site_thumb.jpg"
    },
    {
        "id":8,
        "name":"Skyrim Special Edition",
        "genre_id":2,
        "price":30.99,
        "rating":94,
        "sinopsis":"Winner of over 200 Game of the Year awards, Skyrim Special Edition brings epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons, as well as new features: revamped graphics and effects",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2hAHX0I4CV4V3Tx3dcn-f-YoR7swRiSOJ1vhr78V&s"
    },
    {
        "id":9,
        "name":"Assassin's Creed IV Black Flag",
        "genre_id":2,
        "price":28.99,
        "rating":83,
        "sinopsis":"Year 1715. Pirates dominated the entire Caribbean and had established their own government in which corruption, greed and cruelty were the only laws. Prominent among these men was a haughty young captain named Edward Kenway.",
        "image":"https://static.posters.cz/image/750/posters/assassin-s-creed-4-shore-i21366.jpg"
    },
    {
        "id":10,
        "name":"Tabletop Simulator",
        "genre_id":1,
        "price":9.99,
        "rating":80,
        "sinopsis":"Tabletop Simulator is a player-driven physics sandbox, without set victory or failure conditions. After selecting a table to play on, players interact with the game by spawning and moving virtual pieces, which are subject to a physics simulation. Online multiplayer is supported with a maximum of ten players.",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwc3WvuHoFQGh2CxraziQe_ovMHC182ijorAF-nlXjnc0987gxNAATKX_IksZWcUPcPwA&usqp=CAU"
    },
    {
        "id":11,
        "name":"UNO",
        "genre_id":1,
        "price":5.99,
        "rating":71,
        "sinopsis":"UNO is a multi-player card game in which the objective is to be the first player to get rid of all the cards in their hand. Each player is dealt 7 cards and players take turn drawing cards from the deck.",
        "image":"https://assets2.ignimgs.com/2016/08/17/uno-2016-posterjpg-59ee0c.jpg"
    },
    {
        "id":12,
        "name":"Forza Horizon 5",
        "genre_id":6,
        "price":32.99,
        "rating":92,
        "sinopsis":"Explore the vibrant open world landscapes of Mexico and enjoy limitless fun behind the wheel of the best cars in the world. Conquer the rugged Sierra Nueva in the ultimate Horizon rally experience.",
        "image":"https://i.ebayimg.com/images/g/9VoAAOSwaU9hfHFE/s-l1600.jpg"
    },
    {
        "id":13,
        "name":"F1 2023",
        "genre_id":6,
        "price":37.99,
        "rating":82,
        "sinopsis":"Speed ​​up the braking with EA SPORTS™ F1® 23, the official video game of the 2023 FIA Formula One World Championship™. A new chapter of the exciting story mode `Braking Point` brings you high-speed dramas and intense rivalries.",
        "image":"https://media.contentapi.ea.com/content/dam/ea/f1/f1-23/common/featured-image/f123-featured-image-16x9.jpg.adapt.crop191x100.1200w.jpg"
    },
    {
        "id":14,
        "name":"Project Zomboid",
        "genre_id":7,
        "price":12.25,
        "rating":76,
        "sinopsis":"Project Zomboid is the ultimate in zombie survival. Alone or in MP: you loot, build, craft, fight, farm and fish in a struggle to survive. A hardcore RPG skillset, a vast map, massively customisable sandbox and a cute tutorial raccoon await the unwary. So how will you die? All it takes is a bite..",
        "image":"https://static.displate.com/857x1200/displate/2020-07-20/4a6096698c829bf82fb9a9bf36c0b852_564cf4ca70b2e96ca2bc40f90fec7060.jpg"
    },
    {
        "id":15,
        "name":"Age of Empires IV: Anniversary Edition",
        "genre_id":8,
        "price":13.59,
        "rating":81,
        "sinopsis":"Celebrating its first year captivating millions of players around the world, the award-winning and successful strategy franchise continues with Age of Empires IV: Anniversary Edition, immersing you in the epic historical battles that changed the world.",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHznYJVUWD1kzxe6xAc_U7zhqMpH-6dIWXd-GJAdpfbw73wz437OwG2PzjeJ-Nfb-6CQ&usqp=CAU"
    },
    {
        "id":16,
        "name":"Anno 1800",
        "genre_id":8,
        "price":32.99,
        "rating":81,
        "sinopsis":"Anno 1800™ – Lead the Industrial Revolution! Welcome to the dawn of the Industrial Age. The path you choose will determine the future of your world. Will you innovate or exploit the people? Will you conquer or free the oppressed?",
        "image":"https://m.media-amazon.com/images/M/MV5BMTBmYjY4OTQtMDc4MC00N2UwLThkZjEtN2Y2MDc4YTkxZThmXkEyXkFqcGdeQXVyMTMzNzU4NzAw._V1_.jpg"
    },
    {
        "id":17,
        "name":"Men of War: Assault Squad 2",
        "genre_id":8,
        "price":17.99,
        "rating":68,
        "sinopsis":"Men of War: Assault Squad 2 features new single player skirmish modes, from spectacular tank combat to stealthy sniper missions. Commanders can face off on new multiplayer maps from 1v1 to 8v8",
        "image":"https://upload.wikimedia.org/wikipedia/en/2/28/Men_of_War_Assault_Squad_2_cover_art.jpg"
    },
    {
        "id":18,
        "name":"Old RuneScape 1 Month Membership",
        "genre_id":9,
        "price":11.99,
        "rating":85,
        "sinopsis":"The best retro fantasy MMORPG on the planet. Old School is RuneScape but… older! This is the open world you know and love, but as it was in 2007. Saying that, it’s even better than that – Old School is shaped by you, its players, with regular new content, fixes and expansions voted for by the fans!",
        "image":"https://m.media-amazon.com/images/M/MV5BOGJjYjY4NGQtMjhmOC00MzVhLTg0MTQtN2VkYWE2ZDg4YzYyXkEyXkFqcGdeQXVyMjU3MzI1NzI@._V1_FMjpg_UX1000_.jpg"
    },
    {
        "id":19,
        "name":"Ciberpunk 2077",
        "genre_id":2,
        "price":54.49,
        "rating":86,
        "sinopsis":"Cyberpunk 2077 is an open-world action-adventure RPG set in the grim future of Night City, a dangerous megalopolis obsessed with power, glamor, and relentless body modification.",
        "image":"https://i.ebayimg.com/images/g/5oQAAOSwu05j2GNf/s-l1200.jpg"
    },
    {
        "id":20,
        "name":"Sekiro Shadows Die Twice GOTY Edition",
        "genre_id":2,
        "price":49.99,
        "rating":88,
        "sinopsis":"Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Chart your own path to revenge in the award-winning adventure from FromSoftware, creators of Bloodborne and the Dark Souls saga. take revenge Restore your honor. Kill with ingenuity.",
        "image":"https://swapcloudgames.com/cdn/shop/products/cc735352db842232a33b3d1edd26f8f6_800x.png?v=1621279377"
    },
    {
        "id":21,
        "name":"Rust",
        "genre_id":7,
        "price": 19.99,
        "rating":69,
        "sinopsis":"The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.",
        "image":"https://static.displate.com/280x392/displate/2022-12-02/18ab91b90430a8c5d02f00252d2f8a7d_55003d3264c2438571462497d26a3cc5.jpg"
    },
    {
        "id":22,
        "name":"For The King",
        "genre_id":1,
        "price":4.99,
        "rating":79,
        "sinopsis":"For The King is a strategic role-playing game that combines roguelike and tabletop game elements in a challenging adventure across various kingdoms. Go solo or collaborate with other players online or in local matches.",
        "image":"https://cdn1.epicgames.com/epic/offer/Diesel_productv2_for-the-king_EGS_IronOakGames_ForTheKing_S4-510x680-124fa65abe75469a705800f43aaa481fcc0ae8df-510x680-226ea06223a3a31c31c242834bb6878f.jpg"
    },
    {
        "id":23,
        "name":"Call Of Duty Black Ops",
        "genre_id":4,
        "price":32.99,
        "rating":88,
        "sinopsis":"La saga de acción en primera persona más grande de todos los tiempos y la continuación del Call of Duty®: Modern Warfare 2 que arrasó en todas las críticas, vuelve con Call of Duty®: Black Ops",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTERGR5kTVWddeY5ZZGepKesjFSUmZhphSAdaa4d2q&s"
    },
    {
        "id":24,
        "name":"Black Desert Online",
        "genre_id":9,
        "price":4.49,
        "rating":73,
        "sinopsis":"With over 20 million adventurers, Black Desert Online is an open world action MMORPG. Experience its intense combat, take on World Bosses, lay siege to castles with your friends, and improve in various professions such as fishing, trading, manufacturing, cooking, and more!",
        "image":"https://www.androidheadlines.com/wp-content/uploads/2021/12/Black-Desert-Poster.jpg"
    },
    {
        "id":25,
        "name":"Sons Of The Forest",
        "genre_id":7,
        "price":18.99,
        "rating":85,
        "sinopsis":"Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.",
        "image":"https://m.media-amazon.com/images/M/MV5BYmUzZjkwM2ItY2ZmYS00Y2E5LTgzMzAtMzZiMzI0MzI3ZjY3XkEyXkFqcGdeQXVyMTY4NzU1ODI5._V1_UY1200_CR79,0,630,1200_AL_.jpg"
    },
    /*{
        "id":12,
        "name":"Forza Horizon 5",
        "genre_id":6,
        "price":32.99,
        "rating":92,
        "sinopsis":"",
        "image":""
    },*/
    
]

export default gamedata;