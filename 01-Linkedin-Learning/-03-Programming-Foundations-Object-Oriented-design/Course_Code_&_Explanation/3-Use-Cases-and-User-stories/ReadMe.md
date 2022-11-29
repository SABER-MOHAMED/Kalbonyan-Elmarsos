## Use cases: shifting focus towards the user and how they accomplish a particular goal

a use case needs three essential things

title: what is the goal?
primary actor: who desires it ? the person or system that will use the program
success scenario: how is it accomplished? the steps

keep title short and simple
read " writing effective use cases by Alistair Cockburn" book

Identify the actors
who will interact with the program
all of the humans/systems/external entity that could interact with and use the program.

    Notice that
    the program could have multiple people interacting with it to accomplish different goals.
    Thinking about their different job titles or departments can also prompt ideas for use case scenarios.

    you should also ask does the application need to interact with other computer systems or other organizations?
    Those external systems are considered actors too.

    But keep in mind that the same person with the same role and job title could actually be different actors at different times.
    The focus should really be on the goal that the actor wants to accomplish,
    and how we define those actors can vary depending on the use case.

    the primary actors in scenario aren't necessarily the most important actor in the scenario.
    They're just the one who initiated it

Identify the scenario
describe a goal that an actor can accomplish in a single encounter and stay focused on the user's intention
what they really want to accomplish.

    write your scenario either as a paragraph or a list of steps
    The goal is readability and ease of creation over formality.
    don't put the verbs that will accomplish the goal
    put the goal it self
    omit needless words
    don't use words like screen, click, button , select

    he sunny day use case when everything goes right,
    but when necessary you can describe the alternate paths or extensions.

    Just focus on the typical situation that would occur, what you'd want to do with those situations.

use cases are typically written to describe successful operations.

## Extensions:

you can add extensions or steps for alternative flows, for what happens when things go wrong

precondition that must be true to begin the use case.

## Diagramming use case

it's a diagram of several use cases and multiple actors at the same time.
It shows the relationship between the actors and the different use cases in which they're involved.

Start by listing out the use cases

human actors, we'll represent them as stick figures.

draw ellipses around the use case titles to make it obvious they're self contained use cases and not just a piece of text.

draw a box around all the use cases to represent the boundaries of the system.
Anything inside of the box is part of the application we're trying to write.
And everything that's not, is outside.

draw a line between any of the actors and the use cases they will interact with.

Draw it over on the right side and write the word actor with two angle quotes to make it obvious what it is.

connect the line between the external system and the heat meal use case that interacts with it.

It's common to put the primary actors on the left hand side, those are the ones that initiate any of the use cases.

and the secondary actors on the right hand side, the actors that take more of a reactive role.

his diagram is not referring to a specific sequence that the use cases need to be executed in, so there's no order that they need to be listed.

---

## User stories

are another written format for describing parts of an application,
but they're shorter and simpler than a use case.
still describes a single small scenario from a user's perspective, focusing on their goal.
what they want to do and why rather than focusing on the system.
But unlike a use case, which can be several pages,
a user story is typically written as just one, perhaps two, sentences
and they're very commonly written on index cards because that forces us to keep them short and sweet.

the focus is on intent and should not include descriptions of the user interface.
these are intended to be quick, readable summaries of a specific goal and why the user wants it.

- [user story]
  As a (type of user)
  I want (Goal) => the reason or the benefit.
  so that (reason) => provide context on how this application will be used. -

It focuses on one specific goal of one specific user for a particular reason.

---

| User store | use cases |
|Short(one index card) | Long(a document) |
|One goal, No detail | Multiple goals and details |
|Informal | Casual to (very) formal |
|"placeholder for conversation" | "Record of conversation" |
|**************\*\***************\_\_**************\*\***************|

For more information about user stories check out Mike Cohn's book, User Stories Applied for Agile Software Development.

**Made with 💛 by @SABER_Mohamed**
