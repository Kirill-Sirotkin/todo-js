export class StatusHelper {
    #statusMap = new Map([
        [0, {text: "Not started", cssClass: "status-not-started"}],
        [1, {text: "In progress", cssClass: "status-in-progress"}],
        [2, {text: "Completed", cssClass: "status-completed"}]]);
    #status;
    
    constructor (status) {
        this.#status = status;
    }

    nextStatus () {
        const mapLength = this.#statusMap.size;

        const newStatus = this.#status + 1;

        if (newStatus >= mapLength) {
            this.#status = 0;
            return 0;
        }
        
        this.#status = newStatus;
        return this.#status;
    }

    #prevStatus () {
        const mapLength = this.#statusMap.size;

        const newStatus = this.#status - 1;

        if (newStatus < 0) {
            return mapLength - 1;
        }
        
        return newStatus;
    }

    getStatusText () {
        return this.#statusMap.get(this.#status).text;
    }

    toggleClasses (element) {
        const elementClasses = element.classList;
        const currentClass = this.#statusMap.get(this.#status).cssClass;
        const prevClass = this.#statusMap.get(this.#prevStatus()).cssClass;

        elementClasses.toggle(currentClass);
        elementClasses.remove(prevClass);
    }
}