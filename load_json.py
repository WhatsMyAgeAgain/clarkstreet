import csv
from io import StringIO
import json
import requests


def to_json(data):
    """
    Args: data => list of rows (a 2-dimensional list); first row is header
    Returns: dictionary (native conversion to json)
    """
    json_data = []
    fields = data[0]
    for i in range(1, len(data)):
        obj = {}
        for j in range(len(fields)):
            obj[fields[j]] = data[i][j]
        json_data.append(obj)
    return json_data


nameIdx = {0: 'categories', 1: 'questions'}
fileIdx = {0: './resources/categories.json', 1: './resources/questions.json'}

# set urls for Google Sheet data
base_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-[[id]]/pub?output=csv'
category_id = '1vQeyuO244no4aeI5yYGCIESoqAwCps-PifvaK-rha0_9QlMfTLtw7rSsvRZm2Ja_9KStnifFK8QoPqb'
question_id = '1vS3__N0kBG7rfASDY1FJTVgxPg7cq3TI6qAbKi9ARjKtUrLrKo3U_wxfLf0ukCVto7EVXiKXlItUpOk'

urls = [
    base_url.replace('[[id]]', category_id),
    base_url.replace('[[id]]', question_id)
]

for i in range(len(urls)):
    print('{0} url: {1}\n'.format(nameIdx[i], urls[i]))

# initialize data objects
data = [[], []]

# store csv data in Python list objects
for i in range(len(urls)):
    print('Downloading {0}...'.format(nameIdx[i]))
    res = requests.get(urls[i])  # make web request for csv data
    if res.status_code == 200:
        f_io = StringIO(res.text)  # create file object from csv string
        reader = csv.reader(f_io)  # csv reader takes file object type
        for row in reader:
            data[i].append(row)
    else:
        raise Exception('Received response {0}'.format(
            res.status_code))

# write minified json to file
for i in range(len(data)):
    print('Writing {0} to {1}'.format(nameIdx[i], fileIdx[i]))
    json_data = to_json(data[i])
    with open(fileIdx[i], 'w') as f:
        json.dump(json_data, f, separators=(',', ':'))

input("\nData load complete\n")
