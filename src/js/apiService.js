export default class imgsApiServise {
    constructor () {
        this.serchQuery = '';
        this.page = 1;
    }

    //  fetchImg () {
    //     const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.serchQuery}&page=${this.page}&per_page=12&key=22764492-08543241292e25caceb14f7aa`
    //     return fetch(url)
    //     .then(resp => {
    //         return resp.json()
    //     })
    //     .then(data => {
    //         this.incrPage()
    //         return data.hits
    //     });
    // }

    async fetchImgAsync () {
        try {
            const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.serchQuery}&page=${this.page}&per_page=12&key=22764492-08543241292e25caceb14f7aa`
            const fetchApi = await fetch(url)
            const respons = await fetchApi.json()
            this.incrPage()
            const data = await respons.hits
            return data
        } catch (error) {
            console.log(error)
        }
                  
    }

    incrPage () {
        this.page += 1
    }

    resetPage () {
        this.page = 1
    }

    get query () {
        return this.serchQuery
    }

    set query (newQuery) {
        this.serchQuery = newQuery
    }
}