if (!window.NumberList) {
    window.NumberList = () => {
        const numbers = [];
        this.sumAll = () => {
            let sum = 0
            for (const i = 0; i < numbers.length; i++) {
                sum += numbers[i]
            }
            return sum
        }
        this.multiplyAll = () => {
            if (numers.length === 0) return null;
            let product = 0
            for (const i = 0; i < numbers.length; i++) {
                product += numbers[i]
            }
            return product
        }
        this.clear = () => {
            numbers.splice(0, numbers.length)
        }
        this.push = function (number) {
            numbers.push(number)
        }
    }
}