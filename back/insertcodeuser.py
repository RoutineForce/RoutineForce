import pymysql
import pandas as pd
import random as rd
import string

def dbConnect():
    conn = pymysql.connect (host = 'routineforce.cpqmhjpsyzmh.ap-northeast-2.rds.amazonaws.com', user='routineforce', password='routineforce', db='routineforce', charset='utf8')
    return conn

def insertData(conn):
    dummytype = ('T0001', 'T0002', 'T0003','T0004', 'T0005', 'T0006')
    dummycert = ('T0201', 'T0202', 'T0203')
    dummybodytype = ('T0301', 'T0302')
    dummystatus = ('S0001', 'S0002', 'S0003')
    dummylogin = ('T0101', 'T0102', 'T0103')
    cur = conn.cursor()

    for i in range(1, 30) :
        id = str(i)
        login = dummylogin[rd.randint(0, len(dummylogin) - 1)]

        sql = f"UPDATE user SET login='{login}' WHERE id='{id}';"
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
