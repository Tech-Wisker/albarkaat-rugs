import axios from 'axios';
import React from 'react';
async function Translate (x,locale) {
    const languages = [
        { "id": 1, "code": "en", "name": "English" },
        { "id": 2, "code": "es", "name": "Spanish" },
        { "id": 3, "code": "fr", "name": "French" },
        { "id": 4, "code": "de", "name": "German" },
        { "id": 5, "code": "it", "name": "Italian" },
        { "id": 6, "code": "pt", "name": "Portuguese" },
        { "id": 7, "code": "ru", "name": "Russian" },
        { "id": 8, "code": "zh-CN", "name": "Chinese (Simplified)" },
        { "id": 9, "code": "zh-TW", "name": "Chinese (Traditional)" },
        { "id": 10, "code": "ja", "name": "Japanese" },
        { "id": 11, "code": "ko", "name": "Korean" },
        { "id": 12, "code": "ar", "name": "Arabic" },
        { "id": 13, "code": "hi", "name": "Hindi" },
        { "id": 14, "code": "bn", "name": "Bengali" },
        { "id": 15, "code": "ur", "name": "Urdu" }
      ]
                 
    if(!locale || locale === "" || locale === languages[0].code){
      return x;
    }else{
        try {
            const encodedParams = new URLSearchParams();
            encodedParams.set('from', 'auto');
            encodedParams.set('to', locale);
            encodedParams.set('json', JSON.stringify(x) )
            encodedParams.set('protected_paths[0]', 'extra.last_comment.author');
            
            const options = {
              method: 'POST',
              url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/json',
              headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'f6b9754b7cmsh3b344a70a7c9529p172fd6jsn54d8b774a7af',
                'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
              },
              data: encodedParams,
            };
            
            const response = await axios.request(options);
            console.log("translated",response.data);
            return response.data.trans;
        } catch (error) {
            return x
        }
    }
    

}

export default Translate;
