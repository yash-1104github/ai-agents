import sys
import warnings

from datetime import datetime

from my_project.crew import ResearchCrew

warnings.filterwarnings("ignore", category=SyntaxWarning, module="pysbd")

def run():
    """
    Run the financial researcher crew.
    """
    inputs = {
        'company': 'Tesla'
    }

    try:
        ResearchCrew().crew().kickoff(inputs=inputs)
    except Exception as e:
        raise Exception(f"An error occurred while running the crew: {e}")
