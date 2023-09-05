import psycopg2

hostname = "localhost"
database = "cits3200database"
username = "postgres"
pwd = "new_password"
port_id = 5432

conn = None
cur = None
try:
    conn = psycopg2.connect(
                host = hostname,
                dbname = database,
                user = username,
                password = pwd,
                port = port_id)
    cur = conn.cursor()

    create_script = ''' CREATE TABLE IF NOT EXISTS "user" (
                            user_id int PRIMARY KEY,
                            name varchar(40) NOT NULL,
                            username varchar(40) NOT NULL,
                            email varchar(40) NOT NULL,
                            password varchar(40) NOT NULL)'''
    
    cur.execute(create_script)
    
    conn.commit()
except Exception as error:
    print(error)

finally:
    if cur is not None:
        cur.close()
    
    if conn is not None:
        conn.close()