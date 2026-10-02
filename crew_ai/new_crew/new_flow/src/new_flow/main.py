import sys
import warnings

from datetime import datetime

from new_flow.crew import StockPicker

warnings.filterwarnings("ignore", category=SyntaxWarning, module="pysbd")

def run():
    """
    Run the reserch crew.
    """
    inputs = {
        'sector': 'Technology',
        'current_year': str(datetime.now().year)
    }

    try:
       result =  StockPicker().crew().kickoff(inputs=inputs)
    except Exception as e:
        raise Exception(f"An error occurred while running the crew: {e}")
    
    print("result", result)
