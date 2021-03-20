# ihr-tech-test
Repository for the tech test that IHR has given me as part of its recruitment process.

## requirements
- the name change society requires each citizen have a unique name at any given point
- a citizen may only use a given name once
- citizens may reuse names, but only if they haven't once used it
- names can be no more than a year old
- the citizens can see which names are expiring within 28 days
- the government may want to generate a report of overdue name changes (optional)
- citizens would like to schedule name changes (optional)

## architecture
- two yarn workspaces, one front end and one back end
- front end
    - powered by next and react (with apollo+graphql)
    - simple components to drive the app
    - allow citezens to view and change their name (and see name history)
- back end
    - powered by express with apollo+graphql (backed by postgresql)

## setup
- create a pg db on the localhost titled 'ihr-tech-test' (no quotes)
- ensure username and password are set to 'postgres' (no quotes)

## remaining time
- as of this commit, approximately 1 hour