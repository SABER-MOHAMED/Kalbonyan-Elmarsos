first_name = 'malala'
last_name = 'yousafzai'
note = 'award: Nobel Peace Prize'

first_name_cap = first_name.capitalize()
last_name_cap = last_name.capitalize()
award_location = note.find('award: ')
award_text = note[7:]

print(first_name_cap)
print(last_name_cap)
print(award_location)
print(award_text)