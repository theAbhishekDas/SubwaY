import tweepy
import pandas as pd 
from datetime import datetime
 


access_key = "1fFXwtzhJBi73XwAb3WHwPTHV" 
access_secret = "PEXtCSPva6Ria241XMkIUfUwdCBmewSQxf1VOS6Rtgs876WS8T" 
consumer_key = "1241068358818123782-tMmMMLbCqPrRSRMttr7s51v5HWzJpz"
consumer_secret = "wgyAG3jN2cI5kzR9dabdOxk2kZ6uDqsk1FIkfGBZSbiM7"


    # Twitter authentication
auth = tweepy.OAuthHandler(access_key, access_secret)   
auth.set_access_token(consumer_key, consumer_secret) 

    # # # Creating an API object 
api = tweepy.API(auth)
tweets = api.user_timeline(screen_name='@elonmusk', 
                            # 200 is the maximum allowed count
                            count=200,
                            include_rts = False,
                            # Necessary to keep full_text 
                            # otherwise only the first 140 words are extracted
                            tweet_mode = 'extended'
                            )

list = []
for tweet in tweets:
        text = tweet._json["full_text"]

        refined_tweet = {"user": tweet.user.screen_name,
                        'text' : text,
                        'favorite_count' : tweet.favorite_count,
                        'retweet_count' : tweet.retweet_count,
                        'created_at' : tweet.created_at}
        
        list.append(refined_tweet)

df = pd.DataFrame(list)
df.to_csv('refined_tweets.csv')