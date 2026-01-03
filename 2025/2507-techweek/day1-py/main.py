# Día 1 - New Year 2026 Tech Week

#import psycopg2 # Conexión a base de datos
# Explicaré en el Día 2 la alternativa a psycopg2, para evitar que salgan
# los warnings.
from sqlalchemy import create_engine
import pandas as pd # Análisis
from datetime import date
import matplotlib.pyplot as plt

#def cargar_datos(query_date: date) -> pd.DataFrame, pd.DataFrame:
def cargar_datos() -> pd.DataFrame:
    #connection = psycopg2.connect(
    #    host='localhost',
    #    port='5432',
    #    database='techweek',
    #    user='postgres',
    #    password='jpato'
    #)
    user = 'postgres'
    password = 'jpato'
    database = 'techweek'
    host = 'localhost'
    port = '5432'
    engine = create_engine(f'postgresql://{user}:{password}@{host}:{port}/{database}')

    query = f"""
    SELECT P.transaction_time AS "Time", C.full_name AS "Name",
    P.payment_method AS "PaymentMethod", P.total AS "Total"
    FROM purchase P
    LEFT JOIN client C ON C.id = P.client_id
    """
    #WHERE P.transaction_time
	#BETWEEN TO_TIMESTAMP('{query_date.strftime("%Y-%m-%d 00:00:00")}', 'YYYY-MM-DD HH24:MI:SS')
	#AND TO_TIMESTAMP('{query_date.strftime("%Y-%m-%d 23:59:59")}', 'YYYY-MM-DD HH24:MI:SS')

    #df1 = pd.read_sql_query(query, connection)
    df1 = pd.read_sql_query(query, engine)
    # Transformar tiempo
    df1["Time"] = pd.to_datetime(df1["Time"]).dt.tz_convert('Etc/GMT+5')

    query = f"""
        SELECT P.transaction_time AS "Time", PR.name AS "Name",
        P.payment_method AS "PaymentMethod", PD.items AS "Items",
        PD.subtotal AS "Amount"
        FROM purchase_detail PD
        LEFT JOIN purchase P ON P.id = PD.purchase_id
        LEFT JOIN product PR ON PR.id = PD.product_id
        """
    # WHERE P.transaction_time
    # BETWEEN TO_TIMESTAMP('{query_date.strftime("%Y-%m-%d 00:00:00")}', 'YYYY-MM-DD HH24:MI:SS')
    # AND TO_TIMESTAMP('{query_date.strftime("%Y-%m-%d 23:59:59")}', 'YYYY-MM-DD HH24:MI:SS')

    #df2 = pd.read_sql_query(query, connection)
    df2 = pd.read_sql_query(query, engine)
    # Transformar tiempo
    df2["Time"] = pd.to_datetime(df2["Time"]).dt.tz_convert('Etc/GMT+5')

    #connection.close()

    return df1, df2


def generar_grafico_1(df):
    plt.bar(df["Day"], df["Amount"])

    plt.xlabel("Día")
    plt.ylabel("Ventas")
    plt.title("Evolución de ventas por día")

    plt.show()

def generar_grafico_2(df):
    # Agrupamiento por método de pago
    grouped_df = (
        df
        .groupby("PaymentMethod", as_index=False)
        .agg(
            TotalItems=('Time', 'count')
        )
    )
    # Generar gráfico
    plt.pie(
        grouped_df["TotalItems"],
        labels=grouped_df["PaymentMethod"],
        autopct="%1.1f%%",
        startangle=90
    )

    plt.title("Compras por método de pago")

    plt.show()


#def reporte(report_date):
#    df_ventas = cargar_datos(report_date)
def reporte():
    df_ventas, df_productos = cargar_datos()
    # Evolución de compras por día.
    df_ventas["Day"] = df_ventas['Time'].dt.day
    df_resumen = (
        df_ventas
        .groupby("Day", as_index=False)
        .agg(
            #Purchases=('Time', 'count')
            Amount=('Total', 'sum')
        )
    )
    df_clientes = (
        df_ventas
        .groupby("Name", as_index=False)
        .agg(
            Purchases=('Time', 'count')
        )
        .sort_values("Purchases", ascending=False)
    )
    df_productos["Day"] = df_productos['Time'].dt.day
    df_resumen_productos = (
        df_productos
        .groupby("Day", as_index=False)
        .agg(
            TotalItems=('Time', 'count'),
            TotalAmount=('Amount', 'sum')
        )
    )

    generar_grafico_1(df_resumen)
    #generar_grafico_2(df_productos)

reporte()
#reporte(date(2025, 12, 25))