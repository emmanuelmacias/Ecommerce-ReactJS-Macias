export const getItem = (data, id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                const dataFiltered = data.find((item) => item.id === id)
                resolve(dataFiltered)
            } else {
                resolve(data)
            }
        }, 2000)
    })
}

export const getCategory = (data, category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (category) {
                const dataCategory = data.find((item) => item.category === category)
                resolve(dataCategory)
            } else {
                resolve(data)
            }
        }, 2000)
    })
}

export const getProductFilter = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}
