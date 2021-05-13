from flask import Flask, request, make_response
import sqlite3
app = Flask(__name__)

def dict_factory(cursor,row):
    d = {}
    for idx ,col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d



@app.route('/puuz', methods=['GET' , 'POST' ,'OPTIONS'])
def puuz():
    print(request.method)
    if request.method == 'GET':
       con = sqlite3.connect("puuz.db")
       con.row_factory = dict_factory
       cur = con.cursor()
       cur.execute("SELECT * FROM puuz")
       data = cur.fetchall()
       con.close()
       resp = make_response({"data":data})
       resp.headers['Access-Control-Allow-Origin'] = '*'
       return resp
    elif request.method == 'OPTIONS':
        resp =make_response()
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        resp.headers['Access-Control-Allow-Method'] = 'GET ,POST ,OPTIONS'
        return resp
    elif request.method == 'POST':
        data = request.get_json()
        print(data)
        con = sqlite3.connect("puuz.db")
        cur = con.cursor()
        
        if (data.get('method')=='PUT' ):
            cur.execute("UPDATE puuz SET  ner=? , une=? , hymdune=? WHERE id=?" , (data.get('ner')  ,data.get('une'),data.get('hymdune') , data.get('id'),))
        elif ( data.get('method')=='DELETE' ):
            cur.execute("DELETE FROM puuz   WHERE id=?" , (data.get('id'),))
        elif ( data.get('method')=='POST' ):
            cur.execute("INSERT INTO puuz(ner ,une, hymdune)  VALUES(?,?,?)" , (data.get('ner'), data.get('une'), data.get('hymdune'),))
        con.commit()
        con.close()
        resp = make_response({"tolov":"amjilttai"})
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp

