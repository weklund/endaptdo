# endaptdo

This web app is an event rsvp app.  Imagine a nice middle ground between a group text and Facebook Events.

endaptdo.com/event/{guid}

Yes
Name: Wes
Phone: 502-123-4567

Features:

### Event owners (registered) can create events that respondents can rsvp (yes, no) 
### Event owners can specify rsvp deadline
### Event owners can specify a max number of rsvps (optional)
### Event owners can make events 
    - Event:
        - Name
        - Description
        - Event Deadline (optional?)
        - Max # of respondents (optional)
        - Event banner (icing)



### Respondents (guest) can rsvp with a yes or no
### Respondents can add their name
### Respondents can add their phone number

#TODOS:

- [ ] Cognito auth with phone number as an identifier instead of email
- [ ] Get Pull Review Preview working with Amplify 
- [ ] Make GraphQL API
- [ ] Make Event Creation page
- [ ] Make Event RSVP page with unique GUID (maybe small_hash, or bit.ly api link creation)
- [ ] Style both pages
- [ ] Design SMS implementation for event creators