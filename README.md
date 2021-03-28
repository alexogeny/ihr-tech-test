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
- as of this commit, approximately 0 minutes

Table of time spent:

|  Date  |  Time  |
|--------|--------|
|21-03-20|2 hours |
|22-03-20|1 hour  |

## final state of test
- working backend and frontend servers
- frontend server having issues with imports (seems to think apollo is missing)
    - possible next/yarn issue
- backend server functional with working gql playground and pgsql connection
    - (user+pwd = postgres, dbname=ihr-tech-test)

## notes for reader
- I took the advice of Eva and did as much as I could within 3 hours, but no more
- I have made practical use of GH features to highlight where I would take this project
- As ever, my issues with node lie not in writing the code but dealing with config and getting it to work properly
- My overall design for the database was to have separate user and name objects, then have a history table that links them together. This way the logic of duplicate detection and uniqueness is solved by design -- that is, if your history query returns for a name assigned within a year, you've got duplicate and expiry detection built in.
- For the application, I would have rather built backend in a separate repo/project, but for the sake of building as rapidly as possible, I made two yarn workspaces inside the same repo
- There is no unit testing for this application as it's small and a prototype. If this were to be scaled up then there would be unit tests with at least 90% code coverage
- This is the same for documentation. If I were working beyond a prototype there would be much more documentation (possibly even a wiki depending on complexity)

## if you like what you see
Then I look forward to sitting down and discussing a potential opportunity over an interview (virus permitting). 😊

## adendum: configuration
set up the db:
1. brew install postgresql
2. brew start postgresql
2. createuser --pwprompt postgres
3. createdb ihr-tech-test