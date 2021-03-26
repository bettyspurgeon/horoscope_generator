//Provide an entirely random simple horoscope
//Zodiac Signs for random horoscope
const zodiacSign = ['Aries', 'Leo', 'Sagittarius', 'Aquaries', 'Gemini', 'Libra', 'Capricorn', 'Taurus', 'Virgo', 'Cancer', 'Pices', 'Scorpio']; 
//Answers for 'what to look out for'
const lookOut = ['False Friends.', 'New Beginnings.', 'Second Chances.', 'A sign to walk away.']; 
//Answers for the 'Love outlook' 
const loveOutlook = ['Yikes', 'Not Great.', 'Maybe...', 'Loved up!', 'Not this month...']

//function to getRandomMessage

const getRandomMessage = 
() => {
    //get random zodiac sign
    let randomZodiac = zodiacSign[Math.floor(Math.random() * zodiacSign.length)]; 
    
    //get random look out for
    let randomLookOut = lookOut[Math.floor(Math.random() * lookOut.length)];
    
    //get random love outlook
    let randomloveOutlook = loveOutlook[Math.floor(Math.random() * loveOutlook.length)]; 
    
    //generate random message
    console.log(`For ${randomZodiac}, this will be an interesting month. You should look out for ${randomLookOut}. Should you look for love this month? Well... ${randomloveOutlook} Good luck out there!`)
}; 
getRandomMessage()