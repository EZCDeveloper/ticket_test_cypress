# Welcome to Testing a Ticket Application with Cypress

## TEST CASES PLAN for CYPRESS:

### **Test Suit: Handling Tickets**

1. **Test Case: Create a Ticket Successfully**
    - Step 1: Visit the page
    - Step 2: Fill out the form with valid data and submit the form
    - Step 3: Verify that the new ticket is displayed
2. **Test Case: Fail to Create a Ticket**
    - Step 1: Visit the page
    - Step 2: Fill out the form with the title missing, then try to submit the form
    - Step 3: Verify that the application displays appropriate error message
    - Step 4: Confirm that a the new ticket was not created
3. **Test Case: Retrieve a Ticket +Info**
    - Step 1: Visit the page
    - Step 2: Click on a specific ticket
    - Step 3: Verify that the ticket details are displayed correctly
4. **Test Case: Update Ticket. +Info**
    - Step 1: Visit the page
    - Step 2: Click on an "edit" button for a specific ticket
    - Step 3: Update the ticket details in the form
    - Step 4: Submit the form
    - Step 5: Verify that the ticket is updated with the new details
5. **Test Case: Fail to Update a Ticket. +Info**
    - Step 1: Visit the page
    - Step 2: Click on an "edit" button for a specific ticket
    - Step 3: Leave empty fields details in the form
    - Step 4: Try to submit the form
    - Step 5: Verify that the application displays appropriate error message
    - Step 6: Verify that the ticket was not created
6. **Test Case: Delete Ticket. +Info**
    - Step 1: Visit the page
    - Step 2: Click on a "delete" button for a specific ticket
    - Step 3: Confirm the deletion
    - Step 4: Verify that the ticket is no longer displayed
