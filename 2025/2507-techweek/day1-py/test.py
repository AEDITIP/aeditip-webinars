import uuid
import random
from faker import Faker
from datetime import datetime, timedelta

fake = Faker('es_CO')

def generar_clientes(cantidad=5):
    lista_clientes = []
    
    for _ in range(cantidad):
        cliente = {
            "uuid": str(uuid.uuid4()),  
            "nombre": fake.name(),  
            "id": fake.natural_person_nit(), 
            "telefono": fake.phone_number()     
        }
        lista_clientes.append(cliente)
    
    return lista_clientes

clientes = generar_clientes(1550)

name=[
    "Pan ciabatta",
    "Azúcar rubia 1kg",
    "Sal 400g",
    "Chocolate en barra",
    "Gaseosa 2.25l",
    "Agua Mineral 1l",
    "Naranja (por kilo)",
    "Limón (por kilo)",
    "Manjar Blanco 500g",
    "Leche en bolsa 900ml",
    "Yogurt en botella 900g",
    "Queso crema 180g"
]
precio=[
    0.5, 4.9, 6.9, 2.5, 7.5, 5, 2.5, 7.9, 3.4, 11, 4.9, 5.9, 11.5]

productos = []

for n, p in zip(name, precio):
    productos.append({
        "uuid": str(uuid.uuid4()),  
        "nombre": n,  
        "precio": p, 
        "stock": random.randint(2, 10)
    })

methods = ["Efectivo", "Tarjeta de crédito", "Yape", "Plin"]
purchases = []
ddate = datetime(2025,12,20,8,00)
while not ddate.day == 28:
    payment_choose = random.random()
    payment_index = 0 if payment_choose < 0.18 else 1 if payment_choose < 0.4 else 2 if payment_choose < 0.85 else 3
    purchases.append({
        "uuid": str(uuid.uuid4()),  
        "date": ddate,  
        "client_id": random.choice(clientes)['uuid'], 
        "payment_method": methods[payment_index],
        "total": 0
    })
    if ddate.day == 22:
        ddate += timedelta(seconds=random.randint(60, 175))
    elif ddate.day == 23:
        ddate += timedelta(seconds=random.randint(40, 125))
    elif ddate.day == 24:
        ddate += timedelta(seconds=random.randint(40, 75))
    elif ddate.day == 25:
        ddate += timedelta(seconds=random.randint(200, 400))
    else:
        ddate += timedelta(seconds=random.randint(150, 300))
    if (not ddate.day == 25 and ddate.hour == 23):
        ddate += timedelta(hours=12 if ddate.day==24 else 9)
    if (ddate.day == 25 and ddate.hour == 22):
        ddate += timedelta(hours=11)

details = []

for i, pur in enumerate(purchases):
    total = 0
    products_details = random.sample(productos, k=random.randint(1,5))
    for pro in products_details:
        items = random.randint(1,5)
        subtotal = pro['precio'] * items
        details.append({
            "uuid": str(uuid.uuid4()),  
            "purchase_id": pur['uuid'],  
            "product_id": pro['uuid'], 
            "items": items,
            "subtotal": subtotal
        })
        total += subtotal
    purchases[i]['total'] = total

with open("carga_clientes.sql", "w", encoding="utf-8") as f:
    f.write("INSERT INTO client (id, identification, full_name, contact_phone) VALUES\n")
    for i, c in enumerate(clientes):
        # Formatear la línea del INSERT
        coma = "," if i < len(clientes) - 1 else ";"
        f.write(f"('{c['uuid']}', '{c['id']}', '{c['nombre']}', '{c['telefono']}'){coma}\n")

    f.write("INSERT INTO product (id, name, prize, stock) VALUES\n")
    for i, p in enumerate(productos):
        # Formatear la línea del INSERT
        coma = "," if i < len(productos) - 1 else ";"
        f.write(f"('{p['uuid']}', '{p['nombre']}', '{p['precio']}', '{p['stock']}'){coma}\n")
    
    f.write("INSERT INTO purchase (id, transaction_time, client_id, payment_method, total) VALUES\n")
    for i, p in enumerate(purchases):
        # Formatear la línea del INSERT
        coma = "," if i < len(purchases) - 1 else ";"
        f.write(f"('{p['uuid']}', '{p['date']}', '{p['client_id']}', '{p['payment_method']}', '{p['total']}'){coma}\n")
    
    f.write("INSERT INTO purchase_detail (id, purchase_id, product_id, items, subtotal) VALUES\n")
    for i, d in enumerate(details):
        # Formatear la línea del INSERT
        coma = "," if i < len(details) - 1 else ";"
        f.write(f"('{d['uuid']}', '{d['purchase_id']}', '{d['product_id']}', '{d['items']}', '{d['subtotal']}'){coma}\n")

    