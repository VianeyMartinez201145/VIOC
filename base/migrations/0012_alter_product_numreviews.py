# Generated by Django 5.0.2 on 2024-03-19 05:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_alter_product_countinstock'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='numReviews',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
