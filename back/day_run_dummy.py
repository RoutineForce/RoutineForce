import pymysql
import pandas as pd
import random as rd
import string

def dbConnect():
    conn = pymysql.connect (host = 'routineforce.cpqmhjpsyzmh.ap-northeast-2.rds.amazonaws.com', user='routineforce', password='routineforce', db='routineforce', charset='utf8')
    return conn

def insertData(conn):
    cur = conn.cursor()
    dummydaystart = pd.to_datetime('2021-12-01')
    dummydayend = pd.to_datetime('2022-03-26')
    dayrange = pd.date_range(dummydaystart, dummydayend, freq='D').strftime('%Y-%m-%d')
    
    for j in range(9, 30):
        dummyday = []
        dummytext=""
        daynum = rd.randint(1, 60)
        for i in range(0, daynum):
            while dayrange[i] in dummyday:
                ran_num = rd.randint(0, daynum)
                dummyday.append(dayrange[ran_num])
            dummyday.sort()
            print(dummyday)
        for i in range(0,len(dummyday)):
            text = str(dummyday[i])
            dummytext += text
            if i < len(dummyday) - 1:
                dummytext += ','
            print(dummytext)
        #sql = f"UPDATE routine SET day_run='{dummytext}' WHERE id='{j}'"
        #cur.execute(sql)
        #conn.commit()
    
def main():
    conn = dbConnect()
    print('connected')
    insertData(conn)
    conn.close()
    print('disconnected')

if __name__=="__main__":
    main()
