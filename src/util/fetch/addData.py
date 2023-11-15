from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import pandas as pd

# Your MongoDB connection code
uri = "mongodb+srv://yangmal1430:tGYauUGisBkcKgbk@cluster0.d3q0orm.mongodb.net/?retryWrites=true&w=majority"  # Replace with your actual MongoDB URI
client = MongoClient(uri, server_api=ServerApi('1'))

# Check if the connection is successful
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

# Load the data
file_path = 'exam4you_data.xlsx'  # Replace with your file path
data = pd.read_excel(file_path)

# Parsing the data for MongoDB insertion
def parse_data(row):
    # 전체 타이틀을 분리하여 subject, publisher, author를 추출
    parts = row.iloc[0].split('(')
    subject_publisher = parts[0].strip()
    author = parts[1].strip(')') if len(parts) > 1 else ''

    # '미분류'인 경우 title과 url만 저장
    if '미분류' in subject_publisher:
        return {
            'title': row.iloc[1].strip(),
            'url': row.iloc[2].strip()
        }
    else:
        # subject와 publisher 분리
        subject, publisher = subject_publisher.rsplit(' ', 1) if ' ' in subject_publisher else (subject_publisher, '')

        return {
            'title': row.iloc[1].strip(),
            'url': row.iloc[2].strip(),
            'author': author,
            'publisher': publisher,
            'subject': subject,
            'sources': "https://exam4you.com"
        }



# Applying the parsing function to each row
documents = data.apply(parse_data, axis=1).tolist()

# Selecting the database and collection
db = client['materials']
collection = db['high']

# Inserting the documents into MongoDB
result = collection.insert_many(documents)

# Verifying the insertion
inserted_count = len(result.inserted_ids)
print(f'{inserted_count} documents inserted successfully.')
