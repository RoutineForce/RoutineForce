import pymysql
import pandas as pd
import random as rd
import string

def dbConnect():
    conn = pymysql.connect (host = 'routineforce.cpqmhjpsyzmh.ap-northeast-2.rds.amazonaws.com', user='routineforce', password='routineforce', db='routineforce', charset='utf8')
    return conn

def insertData(conn):
    dummytype = ('health', 'study', 'finance','workout', 'meeting', 'food', 'pet')
    dummydaystart = pd.to_datetime('2021-11-26')
    dummydaystart2 = pd.to_datetime('2021-12-13')
    dummydayend = pd.to_datetime('2021-12-13')
    dummydayend2 = pd.to_datetime('2022-03-26')
    daystartrange = pd.date_range(dummydaystart, dummydaystart2, freq='D')
    dayendrange = pd.date_range(dummydayend, dummydayend2, freq='D')
    dummydayrun = ('mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun')
    dummylocation = ('Seoul', 'Daejeon', 'Daegu', 'Busan', 'Chungju', 'Ilsan', 'Incheon')
    dummycert = ('picture', 'offline', 'report')
    dummybodytype = ('markdown', 'plaintext')
    number_of_strings = 5
    cur = conn.cursor()

    for i in range(1, 30) :
        id = str(i)
        length_of_string = 15
        title = ''.join(rd.choice(string.ascii_letters + string.digits) for _ in range(length_of_string))
        type = dummytype[rd.randint(0, len(dummytype) - 1)]
        day_start = daystartrange[rd.randint(0, len(daystartrange) - 1)]
        day_end = dayendrange[rd.randint(0, len(dayendrange) - 1)]
        day_run = dummydayrun[rd.randint(0, len(dummydayrun) - 1)]
        dues = rd.randrange(0, 50000, 10000)
        penalty = rd.randrange(0, 5000, 1000)
        headcount_min = rd.randrange(1, 20, 5)
        headcount_max = rd.randrange(1, 150, 10)
        location = dummylocation[rd.randint(0, len(dummylocation) - 1)]
        certification_type = dummycert[rd.randint(0, len(dummycert) - 1)]
        length_of_string = 30
        intro = ''.join(rd.choice(string.ascii_letters + string.digits) for p in range(length_of_string))
        length_of_string = 100
        body = ''.join(rd.choice(string.ascii_letters + string.digits) for p in range(length_of_string))
        body_type = dummybodytype[rd.randint(0, len(dummybodytype) - 1)]
        length_of_string = 50
        image_path = ''.join(rd.choice(string.ascii_letters + string.digits) for p in range(length_of_string))
        sql = f"INSERT INTO challenge (id, title, type, day_start, day_end, day_run, dues, penalty, headcount_min, headcount_max, location, certification_type, intro, body, body_type, image_path) VALUES ({id}, '{title}', '{type}', '{day_start}', '{day_end}', '{day_run}', '{dues}', '{penalty}', '{headcount_min}', '{headcount_max}', '{location}', '{certification_type}', '{intro}', '{body}', '{body_type}', '{image_path}')"
        cur.execute(sql)
        conn.commit()
    
def main():
    conn = dbConnect()
    print('connected')
    insertData(conn)
    conn.close()
    print('disconnected')

if __name__=="__main__":
    main()
