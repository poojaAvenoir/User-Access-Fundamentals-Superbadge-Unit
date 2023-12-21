import { LightningElement, track } from 'lwc';

export default class SearchRequirements extends LightningElement {
    @track searchTerm = '';
    @track searchResults = null;

    // Assuming the provided payload is stored in a variable named 'payload'
    

    handleInputChange(event) {
        this.searchTerm = event.target.value;
        console.log("search term: " + this.searchTerm);
        //this.searchRequirements();
    }

    searchRequirements() {
        // Filter requirements based on the search term
        this.searchResults = payload.filter(requirement => {
            // Convert the requirement object to a string for easier search
            const searchString = JSON.stringify(requirement.REH__Requirement__c);

            // Check if the search term (converted to lowercase) is present in the stringified requirement
            return searchString.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
    }
}