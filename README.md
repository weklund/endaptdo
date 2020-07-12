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
### Event owners gets notified when a new rsvp happens, or the deadline is up, or max # of yes respondents is reached



### Respondents (guest) can rsvp with a yes or no
### If Respondent says yes, they can add their name and phone number
### If Respondent says no, they can add their name

#TODOS:

- [ ] Cognito auth with phone number as an identifier instead of email
- [ ] Get Pull Review Preview working with Amplify 
- [ ] Make GraphQL API
- [ ] Make Event Creation page
- [ ] Make Event RSVP page with unique GUID (maybe small_hash, or bit.ly api link creation)
- [ ] Ensure that event specific info is reflected in meta tags for proper link preview
- [ ] Style both pages
- [ ] Bitly API integration with event creation
- [ ] Design SMS implementation for event creators


# Data Model

- Event:
    - Id (Guid)
    - Name
    - Description
    - Event Deadline (optional?)
    - Max # of respondents (optional)
    - Event banner (icing)
 
- Respondent:
    - event_id
    - status (bit 0 ~ no, 1 ~ yes)
    - name
    - phone_number?
