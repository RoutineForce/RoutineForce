import pymysql
from random import randint

def dbConnect():
    conn = pymysql.connect (host = 'routineforce.cpqmhjpsyzmh.ap-northeast-2.rds.amazonaws.com', user='routineforce', password='routineforce', db='routineforce', charset='utf8')
    return conn

def insertData(conn):
    dummylogin = ('kakao', 'naver', 'fortytwo')
    dummyName = 'A';
    cur = conn.cursor()
    
    for i in range(1, 30) :
        id = str(i)
        login = dummylogin[randint(0, 2)]
        name = dummyName + str(i)
        sql = f"INSERT INTO user (id, login, name) VALUES ({id}, '{login}', '{name}')"
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
