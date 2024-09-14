from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class YourTable(Base):
    __tablename__ = 'drivers'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(String(255))
    created_at = Column(DateTime)

    def __repr__(self):
        return f"<YourTable(id={self.id}, name='{self.name}')>"

# Add more model classes as needed for other tables