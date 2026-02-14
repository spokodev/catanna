export interface Song {
  title: string;
  artist: string;
  spotifyId: string;
}

export const songs: Song[] = [
  // ============================================
  // UKRAINIAN SONGS
  // ============================================

  // Океан Ельзи
  { title: "Обійми", artist: "Океан Ельзи", spotifyId: "5561HkcMU0A4i3D6Tlsxhe" },
  { title: "Без тебе", artist: "Океан Ельзи", spotifyId: "1jdcmi6HsRl5YbefAE5uJ2" },
  { title: "На небі", artist: "Океан Ельзи", spotifyId: "3GKEB1FJWuRkIBMjHGqlSm" },
  { title: "Квітка", artist: "Океан Ельзи", spotifyId: "6MHeX3T1LaQoZ0a18bYxKJ" },
  { title: "Не питай", artist: "Океан Ельзи", spotifyId: "3CQHvXdYWhyhCZ0YnOrH3g" },
  { title: "Мить", artist: "Океан Ельзи", spotifyId: "3z6YLMxKqmlFpaDoOKlSmx" },
  { title: "Там, де нас нема", artist: "Океан Ельзи", spotifyId: "0GK24qA5JJJoTzcv2VIyNF" },
  { title: "Я так хочу до тебе", artist: "Океан Ельзи", spotifyId: "26m8YCzG7pNULecmoI5Ntt" },

  // Тіна Кароль
  { title: "Ніжно", artist: "Тіна Кароль", spotifyId: "1sEXmH4Ch0o6p2EETkgErS" },
  { title: "З тобою", artist: "Тіна Кароль", spotifyId: "3LGMLFyfMmpWNZvpfq8CK0" },

  // Бумбокс
  { title: "Вахтерам", artist: "Бумбокс", spotifyId: "7JKJzBo1MGiEOaHELaGD7p" },
  { title: "Квіти в волоссі", artist: "Бумбокс", spotifyId: "0Y4nJIHdqoDEVi5z8IxMBC" },
  { title: "Та4то", artist: "Бумбокс", spotifyId: "4M5oLI6X8GU2IxlBxnKK9O" },
  { title: "Наодинці", artist: "Бумбокс", spotifyId: "4EtvsUNzzRyb1VF6LbTsLu" },
  { title: "Злива", artist: "Бумбокс", spotifyId: "43vrK0qmCrF0e6M5I46zM4" },

  // Jamala
  { title: "Сумую", artist: "Jamala", spotifyId: "3V2uAz2MvBwiwsHNIagKHa" },
  { title: "Крила", artist: "Jamala", spotifyId: "7mCaJNX1d8lWZKTiPJwml7" },
  { title: "Закривай очі", artist: "Jamala", spotifyId: "6Z6oLGS4pE4JXvIt0lJNmM" },

  // Скрябін
  { title: "Місця щасливих людей", artist: "Скрябін", spotifyId: "6vqxGc0hh4Wv78Oo684W2e" },

  // Друга Ріка
  { title: "Три хвилини", artist: "Друга Ріка", spotifyId: "60UCAzSjGnQtfRGjMO89Gv" },
  { title: "Так мало тут тебе", artist: "Друга Ріка", spotifyId: "79vFxZDWChvXPCD0UixJap" },
  { title: "Дотик", artist: "Друга Ріка", spotifyId: "6DwJNMjmMiZunbrCraLvKk" },
  { title: "Вже не сам", artist: "Друга Ріка", spotifyId: "2afnrd5ikvEEyAbXwQgLRW" },
  { title: "П'ю з твоїх долонь", artist: "Друга Ріка", spotifyId: "6luO7P57Yatyrk49szLcgK" },
  { title: "Секрет", artist: "Друга Ріка", spotifyId: "0a5P3O2TDTMQNzlfGcD7tT" },
  { title: "Математика", artist: "Друга Ріка", spotifyId: "2Mw5J5N3K8VVXubtN4HeuC" },
  { title: "Ти є я", artist: "Друга Ріка", spotifyId: "2On3HcnOWllS4NRogWJe3L" },

  // KAZKA
  { title: "МЯТА", artist: "KAZKA", spotifyId: "1sTngmVjSBzFNSn1yJEymt" },
  { title: "Грай", artist: "KAZKA", spotifyId: "1fjSbi4EaE5NwPyu3q08wd" },
  { title: "Свята", artist: "KAZKA", spotifyId: "7yCTeIL7NOBWx6sPKsZD1y" },

  // Jerry Heil
  { title: "Кохайтеся Чорнобриві", artist: "Jerry Heil", spotifyId: "2mYaz3MfxfOaVupIFMEeiz" },

  // Pianoboy
  { title: "Родимки", artist: "Pianoboy", spotifyId: "7nY5CREL7v50drGBp8TfnA" },
  { title: "Кохання", artist: "Pianoboy", spotifyId: "54XOqRIyRe8w8uQ3AbilVX" },

  // Антитіла
  { title: "Лови момент", artist: "Антитіла", spotifyId: "2IK5DhMp4QMZP3C1LFiVGE" },
  { title: "Все красиво", artist: "Антитіла", spotifyId: "6qGKkMIOGqJtNe7VHndTSH" },

  // Khrystyna Soloviy
  { title: "Тримай", artist: "Khrystyna Soloviy", spotifyId: "4LKfJMumpW7HyBT05uXYUx" },
  { title: "Хто, як не ти?", artist: "Khrystyna Soloviy", spotifyId: "1sluGnNbHfRXiAfGsTg3P3" },

  // LATEXFAUNA
  { title: "Шовковиця", artist: "LATEXFAUNA", spotifyId: "5T0jRZlNHbPfqmxpVBSbL2" },
  { title: "Тіло", artist: "LATEXFAUNA", spotifyId: "6WexhLgAcg1HoFOL8Jh4pK" },

  // The Hardkiss
  { title: "Helpless", artist: "The Hardkiss", spotifyId: "5hn3PUFdjhE19aqmRJeDNI" },
  { title: "Коханці", artist: "The Hardkiss", spotifyId: "2mbIGt0obhqJaoo1XgmtJU" },

  // Один в каное
  { title: "Човен", artist: "Один в каное", spotifyId: "12L3PRi1KaDiCPhFngI6Al" },

  // Арсен Мірзоян
  { title: "Поцілуй мене", artist: "Арсен Мірзоян", spotifyId: "2OG0rFErn6FLxMPnNKPhYM" },
  { title: "Джеральдіна", artist: "Арсен Мірзоян", spotifyId: "0S5xP1mN9mqQlmklHyJeJL" },
  { title: "Невчасна", artist: "Арсен Мірзоян", spotifyId: "06ydktNY7ls96OO4mwE17i" },

  // WELLBOY
  { title: "Вишні", artist: "WELLBOY", spotifyId: "1xHs6PLjlvqihewyitoP3A" },

  // MELOVIN
  { title: "Under the Ladder", artist: "MELOVIN", spotifyId: "1wPd8pG0VVlffxSuJEV8ko" },
  { title: "Wonder", artist: "MELOVIN", spotifyId: "5UEeBjVj2ghZzsZ9bHkSWs" },

  // Go_A
  { title: "Шум", artist: "Go_A", spotifyId: "4P6g27LvaQ4GIF8sxn2grB" },
  { title: "Solovey", artist: "Go_A", spotifyId: "2GfDHCfAaKLBLrLESzgnwE" },

  // Brunettes Shoot Blondes
  { title: "Bittersweet", artist: "Brunettes Shoot Blondes", spotifyId: "379nLY31qA5C0LGnFuSWdo" },

  // Vivienne Mort
  { title: "Лети", artist: "Vivienne Mort", spotifyId: "6cCHQFUQ3PUCOWB02lvSow" },

  // MamaRika
  { title: "На руках", artist: "MamaRika", spotifyId: "4fwPQe8z9fl6i2Rbr81Aoq" },

  // TAYANNA
  { title: "Тримай мене", artist: "TAYANNA", spotifyId: "69TsirbsSZq0XHzYsxY6wJ" },

  // Воплі Відоплясова
  { title: "Весна", artist: "Воплі Відоплясова", spotifyId: "1oX8DTKYc1CY8j3eSoDHx7" },
  { title: "Танці", artist: "Воплі Відоплясова", spotifyId: "3Lw454MblF9vCPLw0zBtTd" },
  { title: "Ти ж мене підманула", artist: "Воплі Відоплясова", spotifyId: "5Vkf3IQP8SjlPGwX53cI7s" },
  { title: "День нароDJення", artist: "Воплі Відоплясова", spotifyId: "1FfA3dwXcS29xMosYe8iBq" },
  { title: "Болеро", artist: "Воплі Відоплясова", spotifyId: "0EDOCkobM25yXQeeTN2EI2" },
  { title: "Відпустка", artist: "Воплі Відоплясова", spotifyId: "5HT1v3Xz4vuWYKhTw9LCCu" },
  { title: "Чіо Чіо Сан", artist: "Воплі Відоплясова", spotifyId: "3srwZhPUAaxWNBGqTiSgDx" },
  { title: "Були на селі", artist: "Воплі Відоплясова", spotifyId: "7lU4U1Tkm55QW0uC0yz8SK" },

  // The Unsleeping
  { title: "Припустим", artist: "The Unsleeping", spotifyId: "5VTYLMgsIEyJ3Meh5EOfR8" },
  { title: "Жити", artist: "The Unsleeping", spotifyId: "2MtQrF12P97C6Qhv6Im5Rs" },
  { title: "Не Сплю", artist: "The Unsleeping", spotifyId: "50bsUS9UAcG81LURChnaOH" },

  // Скай
  { title: "Легковажна", artist: "Скай", spotifyId: "23GjvzbHwWFXe8QxGcR0rx" },
  { title: "Струна", artist: "Скай", spotifyId: "2eJk1wpBKHIeXe8qZTY0UZ" },
  { title: "Мелодія Серця", artist: "Скай", spotifyId: "43Q5dvWyG1vphYpGo8NJPL" },
  { title: "Я все б віддав", artist: "Скай", spotifyId: "7JURqyMkL5RQpCrTACI0i2" },
  { title: "Ти сподобалась мені", artist: "Скай", spotifyId: "1efnWzgIQ4afXcDINgQYKs" },

  // Фліт
  { title: "Їжачок", artist: "Фліт", spotifyId: "5UxpyVzTZQ4mq0TtjfVme8" },
  { title: "Моя планета", artist: "Фліт", spotifyId: "02x5ea4fGbQH1tkztm4eRd" },
  { title: "Вихід є!", artist: "Фліт", spotifyId: "5HekRIhrFMVP0J4PH6Isw2" },
  { title: "НОЧІ", artist: "Фліт", spotifyId: "3FCMuApQrJCAgtyAfIjcGT" },
  { title: "Лисичка", artist: "Фліт", spotifyId: "1D8En8A218DX3wcEVsK0D5" },
  { title: "О. Л.", artist: "Фліт", spotifyId: "7vXvQHZSFMnZTpemi6MFrM" },
  { title: "Вийди, моя люба", artist: "Фліт", spotifyId: "6okiZpVnmgsAGKeDhoW3ON" },

  // ============================================
  // INTERNATIONAL — CLASSICS 50s-60s
  // ============================================
  { title: "Unchained Melody", artist: "Righteous Brothers", spotifyId: "1jFhnVoJkcB4lf9tT0rSZS" },
  { title: "Stand By Me", artist: "Ben E. King", spotifyId: "3SdTKo2uVsxFblQjpScoHy" },
  { title: "My Girl", artist: "The Temptations", spotifyId: "6jWkZvd1URGktyTTwcpPpB" },
  { title: "Can't Take My Eyes Off You", artist: "Frankie Valli", spotifyId: "0bfvHnWWOeU1U5XeKyVLbW" },
  { title: "What a Wonderful World", artist: "Louis Armstrong", spotifyId: "6zhQgw10vtcfuZwHGXCKss" },
  { title: "I Say a Little Prayer", artist: "Aretha Franklin", spotifyId: "5CgEeN0NYBG2flCwB49GDb" },
  { title: "God Only Knows", artist: "The Beach Boys", spotifyId: "1Umw3vhysHBodpBFpFsVgK" },
  { title: "Brown Eyed Girl", artist: "Van Morrison", spotifyId: "3yrSvpt2l1xhsV9Em88Pul" },
  { title: "Lean on Me", artist: "Bill Withers", spotifyId: "20kN7bu0HMO8rIVY6tEytW" },
  { title: "You Are So Beautiful", artist: "Joe Cocker", spotifyId: "5Yo8iKcDFk5aJ2Pntaz8UH" },
  { title: "You've Got a Friend", artist: "Carole King", spotifyId: "1qhp5owrFGeZ5Jgin28nwR" },
  { title: "Maybe I'm Amazed", artist: "Paul McCartney", spotifyId: "7DsaOo87BUgyNwMxD6nhC9" },
  { title: "Wonderful Tonight", artist: "Eric Clapton", spotifyId: "1W6eWbydmdSlz7n4RKz3bZ" },
  { title: "Put Your Head On My Shoulder", artist: "Paul Anka", spotifyId: "6YDDrg8llsRtAgLlIROzZc" },
  { title: "Dream A Little Dream Of Me", artist: "The Mamas & The Papas", spotifyId: "27hhIs2fp6w06N5zx4Eaa5" },

  // ============================================
  // INTERNATIONAL — 70s
  // ============================================
  { title: "How Deep Is Your Love", artist: "Bee Gees", spotifyId: "3EuEiyhtu80uQzFl6C6SuB" },
  { title: "You're the First, the Last, My Everything", artist: "Barry White", spotifyId: "4GEk3BQzlP4pysQdHS676E" },
  { title: "Killing Me Softly with His Song", artist: "Roberta Flack", spotifyId: "3gsCAGsWr6pUm1Vy7CPPob" },
  { title: "You Make Me Feel Like A Natural Woman", artist: "Aretha Franklin", spotifyId: "5K09WxKdlkroDyEVyOSySy" },
  { title: "September", artist: "Earth, Wind & Fire", spotifyId: "2grjqo0Frpf2okIBiifQKs" },
  { title: "Is This Love", artist: "Bob Marley", spotifyId: "6JRLFiX9NJSoRRKxowlBYr" },
  { title: "Three Little Birds", artist: "Bob Marley", spotifyId: "6A9mKXlFRPMPem6ygQSt7z" },
  { title: "Lovely Day", artist: "Bill Withers", spotifyId: "0bRXwKfigvpKZUurwqAlEh" },
  { title: "You Are the Sunshine of My Life", artist: "Stevie Wonder", spotifyId: "0n2pjCIMKwHSXoYfEbYMfX" },
  { title: "Dancing Queen", artist: "ABBA", spotifyId: "0GjEhVFGZW8afUYGChu3Rr" },
  { title: "Signed, Sealed, Delivered (I'm Yours)", artist: "Stevie Wonder", spotifyId: "0kzhMZZNmxiLG7qyJhVBHB" },
  { title: "A Song for You", artist: "Donny Hathaway", spotifyId: "57IHG8x8BiqKHanYQk92ji" },
  { title: "Moondance", artist: "Van Morrison", spotifyId: "7gSeGMqiOrv7ftmxYLFaOA" },

  // ============================================
  // INTERNATIONAL — 80s POWER BALLADS
  // ============================================
  { title: "Every Breath You Take", artist: "The Police", spotifyId: "1JSTJqkT5qHq8MDJnJbRE1" },
  { title: "I Want to Know What Love Is", artist: "Foreigner", spotifyId: "1JLn8RhQzHz3qDqsChcmBl" },
  { title: "Take My Breath Away", artist: "Berlin", spotifyId: "3PnygBQ2ruykkHgrCWV3jt" },
  { title: "Eternal Flame", artist: "The Bangles", spotifyId: "4xiaE15ARCs5CVPA6J8gmC" },
  { title: "Time After Time", artist: "Cyndi Lauper", spotifyId: "7o9uu2GDtVDr9nsR7ZRN73" },
  { title: "Open Arms", artist: "Journey", spotifyId: "2w4EpqGasrz9qdTwocx54t" },
  { title: "True", artist: "Spandau Ballet", spotifyId: "4q2lRiodoQnyFO65watkse" },
  { title: "Careless Whisper", artist: "George Michael", spotifyId: "4jDmJ51x1o9NZB5Nxxc7gY" },
  { title: "Endless Love", artist: "Diana Ross & Lionel Richie", spotifyId: "6PxbmgMWKmdbh5gdRENoWC" },
  { title: "Hello", artist: "Lionel Richie", spotifyId: "0mHyWYXmmCB9iQyK18m3FQ" },
  { title: "Against All Odds (Take a Look at Me Now)", artist: "Phil Collins", spotifyId: "3l8oPs5itiGKEtEKuPtDhF" },
  { title: "Somebody to Love", artist: "Queen", spotifyId: "5txoZyuAmtCfmDjUCEphWm" },
  { title: "Crazy Little Thing Called Love", artist: "Queen", spotifyId: "6xdLJrVj4vIXwhuG8TMopk" },
  { title: "Heaven", artist: "Bryan Adams", spotifyId: "13IREYANNRzOzGhjhOKesr" },
  { title: "(Everything I Do) I Do It For You", artist: "Bryan Adams", spotifyId: "1Eb90nmqTrxylKFhcUzW8P" },
  { title: "Always", artist: "Bon Jovi", spotifyId: "0kish3Tobj6Wq0we74343q" },
  { title: "It Must Have Been Love", artist: "Roxette", spotifyId: "7EFo7FKpPbLLIJIJTKTqKo" },
  { title: "Faithfully", artist: "Journey", spotifyId: "57ebBLITHpRgRKGrlbxMZS" },
  { title: "Waiting for a Girl Like You", artist: "Foreigner", spotifyId: "2OgVsp77En2nju8pnCieVU" },
  { title: "Lovesong", artist: "The Cure", spotifyId: "7K71priwuwcWwbgfHVQJdq" },
  { title: "Just Like Heaven", artist: "The Cure", spotifyId: "76GlO5H5RT6g7y0gev86Nk" },

  // ============================================
  // INTERNATIONAL — 90s
  // ============================================
  { title: "I Don't Want to Miss a Thing", artist: "Aerosmith", spotifyId: "5qlJg0Wbj3sslxfwiaRNpq" },
  { title: "My Heart Will Go On", artist: "Celine Dion", spotifyId: "33LC84JgLvK2KuW43MfaNq" },
  { title: "I'll Make Love to You", artist: "Boyz II Men", spotifyId: "3uBF3T8uO2PtAx6yCvVTos" },
  { title: "I Swear", artist: "All-4-One", spotifyId: "4WUnM4KNZ0kjp0CUeoyOnS" },
  { title: "Always Be My Baby", artist: "Mariah Carey", spotifyId: "2aBxt229cbLDOvtL7Xbb9x" },
  { title: "Vision of Love", artist: "Mariah Carey", spotifyId: "0gLQ6jhJsyYfl7PrD1RZ7X" },
  { title: "Lovefool", artist: "The Cardigans", spotifyId: "7aQjPecQdIuNd1sz3KCDhD" },
  { title: "Kiss from a Rose", artist: "Seal", spotifyId: "3YKptz29AsOlm7WAVnztBh" },
  { title: "Truly Madly Deeply", artist: "Savage Garden", spotifyId: "013AWvizllIUEC2FOBzOnh" },
  { title: "I Knew I Loved You", artist: "Savage Garden", spotifyId: "6nozDLxeL0TE4MS9GqYU1v" },
  { title: "Wonderwall", artist: "Oasis", spotifyId: "1qPbGZqppFwLwcBC1JQ6Vr" },
  { title: "Fields of Gold", artist: "Sting", spotifyId: "0I1DJdLt9BKOb7GWmWxCjo" },
  { title: "You Raise Me Up", artist: "Westlife", spotifyId: "5XQavlXrNHBBvlN4IJqhqW" },
  { title: "Iris", artist: "The Goo Goo Dolls", spotifyId: "6Qyc6fS4DsZjB2mRW9DsQs" },
  { title: "(I've Had) The Time of My Life", artist: "Bill Medley & Jennifer Warnes", spotifyId: "6W7ztLBiRzBN46ZaPAcQ0F" },
  { title: "Kissing You", artist: "Des'ree", spotifyId: "1Xp8MKmfoFDib6dHM6JF53" },
  { title: "Kiss Me", artist: "Sixpence None the Richer", spotifyId: "0FXi5Zb73QMvXlhd71vesi" },
  { title: "Fade Into You", artist: "Mazzy Star", spotifyId: "1LzNfuep1bnAUR9skqdHCK" },
  { title: "To Be With You", artist: "Mr. Big", spotifyId: "3bP47tw8MOgtrwdO1iahVl" },

  // ============================================
  // INTERNATIONAL — 2000s-PRESENT
  // ============================================

  // Ed Sheeran
  { title: "Perfect", artist: "Ed Sheeran", spotifyId: "0tgVpDi06FyKpA1z0VMD4v" },
  { title: "Thinking out Loud", artist: "Ed Sheeran", spotifyId: "34gCuhDGsG4bRPIf9bb02f" },
  { title: "Photograph", artist: "Ed Sheeran", spotifyId: "1HNkqx9Ahdgi1Ixy2xkKkL" },
  { title: "Afterglow", artist: "Ed Sheeran", spotifyId: "0E4Y1XIbs8GrAT1YqVy6dq" },

  // John Legend
  { title: "All of Me", artist: "John Legend", spotifyId: "3U4isOIWM3VvDubwSI3y7a" },

  // Adele
  { title: "Make You Feel My Love", artist: "Adele", spotifyId: "273QnyCvJB65rScHJ1nPZb" },

  // Bruno Mars
  { title: "Just the Way You Are", artist: "Bruno Mars", spotifyId: "7BqBn9nzAq8spo5e7cZ0dJ" },
  { title: "Marry You", artist: "Bruno Mars", spotifyId: "2GiJYvgVaD2HtM8GqD9EgQ" },

  // Whitney Houston
  { title: "I Will Always Love You", artist: "Whitney Houston", spotifyId: "4eHbdreAnSOrDDsFfc4Fpm" },
  { title: "I Wanna Dance with Somebody", artist: "Whitney Houston", spotifyId: "2tUBqZG2AbRi7Q0BIrVrEj" },

  // Elton John
  { title: "Your Song", artist: "Elton John", spotifyId: "38zsOOcu31XbbYj9BIPUF1" },
  { title: "Can You Feel the Love Tonight", artist: "Elton John", spotifyId: "2XMvVGHBFjmJJnXpGMbQiP" },
  { title: "Something About the Way You Look Tonight", artist: "Elton John", spotifyId: "5LjSxAIKwyZvQqJ04ZQ0Da" },

  // The Beatles
  { title: "Here Comes The Sun", artist: "The Beatles", spotifyId: "6dGnYIeXmHdcikdzNNDMm2" },
  { title: "Something", artist: "The Beatles", spotifyId: "0pNeVovbiZHkulpGeqFPp3" },
  { title: "In My Life", artist: "The Beatles", spotifyId: "3KfbEIOC7YIv90FIfNSZpo" },

  // Coldplay
  { title: "Yellow", artist: "Coldplay", spotifyId: "3AJwUDP919kvQ9QcozQPxg" },
  { title: "A Sky Full of Stars", artist: "Coldplay", spotifyId: "0FDzzruyVECATHXKHFs9eJ" },

  // Frank Sinatra
  { title: "Fly Me to the Moon", artist: "Frank Sinatra", spotifyId: "5b7OgznPJJr1bh5MHGxeCb" },
  { title: "The Way You Look Tonight", artist: "Frank Sinatra", spotifyId: "39MQU7P4kJfnHcWKHLXzad" },
  { title: "I've Got You Under My Skin", artist: "Frank Sinatra", spotifyId: "3aEJMh1cXKEjgh52claxQp" },

  // Elvis Presley
  { title: "Can't Help Falling in Love", artist: "Elvis Presley", spotifyId: "44AyOl4qVkzS48vBsbNXaC" },
  { title: "Love Me Tender", artist: "Elvis Presley", spotifyId: "6vRhKMRIFZB7GY0sRHvwCg" },

  // Stevie Wonder
  { title: "Isn't She Lovely", artist: "Stevie Wonder", spotifyId: "67Hna13dNDkZvBpTXRIaOJ" },
  { title: "I Just Called to Say I Love You", artist: "Stevie Wonder", spotifyId: "3mPIIjOIZXMqCdGNjfsRaa" },

  // Beyonce
  { title: "Halo", artist: "Beyonce", spotifyId: "4JehYebiI9JE8sR8MisGVb" },
  { title: "Crazy in Love", artist: "Beyonce", spotifyId: "5IVuqXILoxVWvWEPm82Bkj" },
  { title: "XO", artist: "Beyonce", spotifyId: "40xhyfAPDoMtv494MfPevP" },

  // Lady Gaga
  { title: "Shallow", artist: "Lady Gaga, Bradley Cooper", spotifyId: "2VxeLyX666F8uXCJ0dZF8B" },
  { title: "Always Remember Us This Way", artist: "Lady Gaga", spotifyId: "2SPTiAoccoRpsFGdIaUlGR" },
  { title: "Die With A Smile", artist: "Lady Gaga & Bruno Mars", spotifyId: "2plbrEY59IikOBgBGLjaoe" },

  // Etta James
  { title: "At Last", artist: "Etta James", spotifyId: "4Hhv2vrOTy89HFRcjU3QOx" },

  // Al Green
  { title: "Let's Stay Together", artist: "Al Green", spotifyId: "1DBq7YJINBbyqpEQNNlsAZ" },

  // Norah Jones
  { title: "Come Away with Me", artist: "Norah Jones", spotifyId: "6jGnykaS6TkWp15utXSAeI" },
  { title: "Don't Know Why", artist: "Norah Jones", spotifyId: "6RhVMsRJ79Ry30SVhLlKsP" },
  { title: "Sunrise", artist: "Norah Jones", spotifyId: "0mKReTX6GsMqjdTTfNPlvc" },

  // Amy Winehouse
  { title: "Valerie", artist: "Amy Winehouse", spotifyId: "0kOPat87LgMOFkJP8Ij0hj" },

  // 2000s Love Songs
  { title: "A Thousand Years", artist: "Christina Perri", spotifyId: "6lanRgr6wXibZr8KgzXxBl" },
  { title: "Hey There Delilah", artist: "Plain White T's", spotifyId: "4RCWB3V8V0dignt99LZ8vH" },
  { title: "You're Beautiful", artist: "James Blunt", spotifyId: "0vg4WnUWvze6pBOJDTq99k" },
  { title: "The Way I Am", artist: "Ingrid Michaelson", spotifyId: "43ddJFnP8m3PzNJXiHuiyJ" },
  { title: "If I Ain't Got You", artist: "Alicia Keys", spotifyId: "3XVBdLihbNbxUwZosxcGuJ" },
  { title: "No One", artist: "Alicia Keys", spotifyId: "6IwKcFdiRQZOWeYNhUiWIv" },
  { title: "You Raise Me Up", artist: "Josh Groban", spotifyId: "4TbNLKRLKlxZDlS0pu7Lsy" },
  { title: "Better Together", artist: "Jack Johnson", spotifyId: "4VywXu6umkIQ2OS0m1I79y" },
  { title: "I'm Yours", artist: "Jason Mraz", spotifyId: "1EzrEOXmMH3G43AXT1y7pA" },
  { title: "Lucky", artist: "Jason Mraz & Colbie Caillat", spotifyId: "0IktbUcnAGrvD03AWnz3Q8" },
  { title: "Bubbly", artist: "Colbie Caillat", spotifyId: "1lkvpmrCaXK8QtliFDcHBO" },
  { title: "Chasing Cars", artist: "Snow Patrol", spotifyId: "5hnyJvgoWiQUYZttV4wXy6" },
  { title: "Ho Hey", artist: "The Lumineers", spotifyId: "0DwClY2t9YAWHBROMIgrXb" },
  { title: "Home", artist: "Edward Sharpe & The Magnetic Zeros", spotifyId: "7w5cxTEzp1rfV3KCy0Bd5N" },
  { title: "Bleeding Love", artist: "Leona Lewis", spotifyId: "7wZUrN8oemZfsEd1CGkbXE" },
  { title: "Such Great Heights", artist: "The Postal Service", spotifyId: "4G21jWo0Cm6lOIUNnZ2mUI" },
  { title: "Beautiful Day", artist: "U2", spotifyId: "0gzqZ9d1jIKo9psEIthwXe" },
  { title: "Put Your Records On", artist: "Corinne Bailey Rae", spotifyId: "2nGFzvICaeEWjIrBrL2RAx" },
  { title: "Steal My Kisses", artist: "Ben Harper", spotifyId: "4cIwg5VY8Lo1NYwq7llOth" },

  // 2010s-2020s Pop
  { title: "Love Me Like You Do", artist: "Ellie Goulding", spotifyId: "0Cy7wt6IlRfBPHXXjmZbcP" },
  { title: "Stay with Me", artist: "Sam Smith", spotifyId: "5Nm9ERjJZ5oyfXZTECKmRt" },
  { title: "Say You Won't Let Go", artist: "James Arthur", spotifyId: "5uCax9HTNlzGybIStD3vDh" },
  { title: "Lover", artist: "Taylor Swift", spotifyId: "1dGr1c8CrMLDpV6mPbImSI" },
  { title: "Love Story (Taylor's Version)", artist: "Taylor Swift", spotifyId: "3CeCwYWvdfXbZLXFhBrbnf" },
  { title: "You Belong with Me (Taylor's Version)", artist: "Taylor Swift", spotifyId: "1qrpoAMXodY6895hGKoUpA" },
  { title: "Stay", artist: "Rihanna ft. Mikky Ekko", spotifyId: "1dEy9Pl81QopSxNsPxXQxv" },
  { title: "Senorita", artist: "Shawn Mendes & Camila Cabello", spotifyId: "0TK2YIli7K1leLovkQiNik" },
  { title: "Mirrors", artist: "Justin Timberlake", spotifyId: "4rHZZAmHpZrA3iH5zx8frV" },
  { title: "Golden Hour", artist: "JVKE", spotifyId: "5odlY52u43F5BjByhxg7wg" },
  { title: "Adore You", artist: "Harry Styles", spotifyId: "3jjujdWJ72nww5eGnfs2E7" },
  { title: "Night Changes", artist: "One Direction", spotifyId: "5O2P9iiztwhomNh8xkR9lJ" },

  // R&B / Soul
  { title: "Best Part", artist: "Daniel Caesar ft. H.E.R.", spotifyId: "1RMJOxR6GRPsBHL8qeC2ux" },
  { title: "Tennessee Whiskey", artist: "Chris Stapleton", spotifyId: "3fqwjXwUGN6vbzIwvyFMhx" },
  { title: "My Boo", artist: "Usher & Alicia Keys", spotifyId: "68vgtRHr7iZHpzGpon6Jlo" },
  { title: "La Vie En Rose", artist: "Edith Piaf", spotifyId: "3lAun9V0YdTlCSIEXPvfsY" },

  // Nat King Cole
  { title: "L-O-V-E", artist: "Nat King Cole", spotifyId: "4QxDOjgpYtQDxxbWPuEJOy" },
  { title: "Unforgettable", artist: "Nat King Cole", spotifyId: "648TTtYB0bH0P8Hfy0FmkL" },
  { title: "The Very Thought of You", artist: "Nat King Cole", spotifyId: "63tbczwYZv3Mctr064eQR4" },
  { title: "When I Fall in Love", artist: "Nat King Cole", spotifyId: "6s6h2XK7Nl8lEcTzr7ezeB" },
  { title: "Fever", artist: "Peggy Lee", spotifyId: "4Ke1CYcm2wYDFlOhziFFjK" },
  { title: "That's Amore", artist: "Dean Martin", spotifyId: "4I4aQGNJ2HufloNtB65nxR" },

  // Jazz Standards
  { title: "Cheek to Cheek", artist: "Ella Fitzgerald & Louis Armstrong", spotifyId: "33jt3kYWjQzqn3xyYQ5ZEh" },
  { title: "My Funny Valentine", artist: "Chet Baker", spotifyId: "4l9hml2UCnxoNI3yCdL1BW" },
  { title: "Summertime", artist: "Ella Fitzgerald", spotifyId: "5RwNRR80aYnfysYmoad2et" },
  { title: "Moon River", artist: "Andy Williams", spotifyId: "24AIahNHzBxm9S12peXbnG" },
  { title: "Someone to Watch Over Me", artist: "Ella Fitzgerald", spotifyId: "5RcvlmVx2xtFcp2Ta5pw7X" },
  { title: "They Can't Take That Away from Me", artist: "Ella Fitzgerald & Louis Armstrong", spotifyId: "2U3ENhffoGzWcoYoR0U4Lm" },
  { title: "What a Diff'rence a Day Makes", artist: "Dinah Washington", spotifyId: "4GUvOaJiYlvFTKXDEg3QR6" },
  { title: "Let's Do It (Let's Fall in Love)", artist: "Ella Fitzgerald", spotifyId: "4t8sAjyCzzNKeQhFavo45r" },
  { title: "'S Wonderful", artist: "Ella Fitzgerald", spotifyId: "4qrNDqLkVXz7t5fJnGqr6B" },

  // Disney Love Songs
  { title: "A Whole New World", artist: "Peabo Bryson & Regina Belle", spotifyId: "7fLkHVJAJLENmSvhrEHZxV" },
  { title: "Beauty and the Beast", artist: "Ariana Grande & John Legend", spotifyId: "7wMPhUSe6CZga1vOMpLTJP" },
  { title: "I See the Light", artist: "Mandy Moore & Zachary Levi", spotifyId: "6klpXs2uAjagnZMFkt4qkl" },
  { title: "Love Is an Open Door", artist: "Kristen Bell & Santino Fontana", spotifyId: "3IPnBzGRMg6BfViFxxa0Gq" },
  { title: "You'll Be in My Heart", artist: "Phil Collins", spotifyId: "4Y8vb1uy9IjM2V1hqvrAid" },
  { title: "Part of Your World", artist: "Jodi Benson", spotifyId: "7tUSJY4nsDBJTjd1UXKRsT" },

  // Rock Ballads
  { title: "Nothing Else Matters", artist: "Metallica", spotifyId: "2CtemffYhT0DJWcT1XW047" },
  { title: "Love of My Life", artist: "Queen", spotifyId: "790YJcgHlN3SaosQCHlWzn" },
  { title: "More Than Words", artist: "Extreme", spotifyId: "1gVgkQFOKa8Wc1HYsJtPdH" },
  { title: "Patience", artist: "Guns N' Roses", spotifyId: "1OEoNpiyqBghuEUaT6Je6U" },

  // Movie Soundtracks
  { title: "Falling Slowly", artist: "Glen Hansard & Marketa Irglova", spotifyId: "6EIVLz5xM1xE29r0OmIkWt" },
  { title: "City of Stars", artist: "Ryan Gosling & Emma Stone", spotifyId: "6XQHlsNu6so4PdglFkJQRJ" },
  { title: "Rewrite the Stars", artist: "Zac Efron & Zendaya", spotifyId: "65fpYBrI8o2cfrwf2US4gq" },
  { title: "Never Enough", artist: "Loren Allred", spotifyId: "0Gl5s8IhMmQE5YQwM8Qx1J" },
  { title: "The Way We Were", artist: "Barbra Streisand", spotifyId: "1vZTgn4JXWMahR8r99ug5H" },
  { title: "Over the Rainbow", artist: "Israel Kamakawiwo'ole", spotifyId: "25U7raB3ZSszayTYClh4hF" },
  { title: "Up Where We Belong", artist: "Joe Cocker & Jennifer Warnes", spotifyId: "0Co8hKbjUy273NrGliGdWZ" },

  // Latin / International
  { title: "Con Te Partiro", artist: "Andrea Bocelli", spotifyId: "54JNLlLnFg50KEL3FiWUd8" },

  // Indie / Alternative
  { title: "I Will Follow You into the Dark", artist: "Death Cab for Cutie", spotifyId: "0cS7zryXdVfgWXUrNa3HMj" },
  { title: "First Day of My Life", artist: "Bright Eyes", spotifyId: "0eBryM7ePQH3Klt3jz8xZd" },
  { title: "Sweet Disposition", artist: "The Temper Trap", spotifyId: "5RoIXwyTCdyUjpMMkk4uPd" },
  { title: "Bloom", artist: "The Paper Kites", spotifyId: "41yIvlFgvGwxq8qTqAR7eG" },
  { title: "Riptide", artist: "Vance Joy", spotifyId: "3R1Xa7LkesYpNI3v6fslKi" },
  { title: "Youth", artist: "Troye Sivan", spotifyId: "1cOyWWUr3oXJIxY0AjJEx9" },

  // Country
  { title: "I Walk the Line", artist: "Johnny Cash", spotifyId: "7hxZF4jETnE5Q75rKQnMjE" },
  { title: "Ring of Fire", artist: "Johnny Cash", spotifyId: "5rDkA2TFOImbiVenmnE9r4" },
  { title: "Amazed", artist: "Lonestar", spotifyId: "6qc34bnVOyqGDPni8H5W0U" },
  { title: "You're Still the One", artist: "Shania Twain", spotifyId: "1wb4P4F0sxAQ2KXrRvsx6n" },
  { title: "From This Moment On", artist: "Shania Twain", spotifyId: "0Q7Jp3aCwfYnSnbMDoXWyR" },
  { title: "Speechless", artist: "Dan + Shay", spotifyId: "3GJ4hzg4lrGwU51Y3VARbF" },
];
