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
    routine_num = []
    sql = "SELECT id, login FROM user;"
    cur.execute(sql)
    user_idlogin = cur.fetchall()
    sql = "SELECT id, status FROM routine"
    cur.execute(sql)
    routine_list = cur.fetchall()
    #a = list(user_idlogin[0])
    #a.append(1)
    #print(tuple(a))
    for i in range(0, 28) :
        routine_id = rd.randint(0, 28)
        while routine_id in routine_num:
            routine_id = rd.randint(0, 28)
        routine_num.append(routine_id)
        ran_num = rd.randint(0, 28)
        user = list(user_idlogin[ran_num])
        routine = list(routine_list[routine_id])
        user.append(routine[0])
        user.append(routine[1])
        user = tuple(user)
        print(user)
        sql2 = f"INSERT INTO routine_registration(user_id, user_login, routine_id, status) VALUES{user}"
        cur.execute(sql2)
        #conn.commit()
    
def main():
    conn = dbConnect()
    print('connected')
    insertData(conn)
    conn.close()
    print('disconnected')

if __name__=="__main__":
    main()
